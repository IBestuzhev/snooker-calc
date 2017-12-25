import { createReducer } from './utils';
import {ACTION_FAUL, ACTION_FREEBALL, ACTION_POT, ACTION_UNDO, ACTION_FINAL_MISS} from '../actions/types'
import {PlayerAction, ScoreAction} from '../actions/scores'
import { createSelector, createStructuredSelector } from "reselect";
import { StateGlobal } from "./index";
import { PotsList } from '../components/scores.potlist';
import { StarterSelector } from './starter';
import { NameSelector } from './names';
import { Action } from 'redux';

export type PlayerPos = "left" | "right"

export interface StatePot {
    player: PlayerPos,
    score: number,
    isFreeball: boolean,
    isFaul: boolean
}

export interface StateScore {
    pots: StatePot[],
}

const PotsSelector = (state: StateGlobal) => state.score.pots;
const getPotListPlayerSelector = () => createSelector(
    PotsSelector,
    (state: StateGlobal, player: PlayerPos) => player,
    (pots, player) => pots.filter(p => p.player == player)
)

const potIsRed = (p: StatePot) => (!p.isFaul && !p.isFreeball && p.score == 1)

const RedCountSelector = createSelector(
    PotsSelector, StarterSelector,
    (pots, starter) => {
        let redPotted = pots.reduce((s, p) => (potIsRed(p) ? s + 1 : s), 0)
        redPotted += (15 - starter.redRemaining)
        return redPotted
    }
)
const LastSuccessSelector = createSelector(
    PotsSelector,
    (pots) => pots.filter(p => !p.isFaul && !p.isFreeball).slice(-1)[0]
)
const HasPottedFinalSelector = createSelector(
    PotsSelector,
    (pots) => pots.some(p => p.score == 0)
)
const LastPotSelector = createSelector(
    PotsSelector,
    (pots) => pots.slice(-1)[0]
)
const CanPotFreeBallSelector = createSelector(
    LastPotSelector, HasPottedFinalSelector,
    (lastPot, hasPottedFinal) => (!hasPottedFinal && lastPot && lastPot.isFaul && lastPot.score > 0) ? lastPot.player : undefined
)
const ShowMissBtnSelector = createSelector(
    RedCountSelector, HasPottedFinalSelector,
    (pottedReds, hasPottedFinal) => pottedReds >= 15 && ! hasPottedFinal
)
const CanPotColorSelector = createSelector(
    RedCountSelector, LastPotSelector, LastSuccessSelector, HasPottedFinalSelector,
    (pottedReds, lastPot, lastSuccessPot, hasPottedFinal) => {
        let canPotColor: (p: PlayerPos, s: number) => boolean = (player, score) => {
            if (score === 1) {
                return pottedReds < 15
            }
            if (pottedReds < 15) {
                return lastPot && lastPot.player == player && lastPot.score == 1;
            }
            if (hasPottedFinal) {
                return score == (Math.max(1, lastSuccessPot.score) + 1)
            }
            if (lastPot && lastPot.score == 1) {
                return lastPot.player == player
            }
            return true
        }
        return canPotColor
    }
)
export const CanPotSelector = createStructuredSelector({
    canPotColor: CanPotColorSelector,
    canPotFreeball: CanPotFreeBallSelector,
    showMissBtn: ShowMissBtnSelector
})
export const getPotListSelector = () => {
    const potSelector = getPotListPlayerSelector()
    return createStructuredSelector({
        pots: potSelector,
        lastPot: createSelector(
            PotsSelector, 
            (state: StateGlobal, player: PlayerPos) => player,
            (pots, player) => {
                let lastPot = pots.filter(({score}) => score > 0).slice(-1)[0]
                if (lastPot && lastPot.player == player) {
                    return lastPot;
                }
                return null
            }
        )
    })
}

const ScoreOnTableSelector = createSelector(
    RedCountSelector, HasPottedFinalSelector, LastSuccessSelector, 
    (pottedReds, hasPottedFinal, lastSuccessPot) => {
        let scoreOnTable = (15 - pottedReds) * 8 + (2 + 3 + 4 + 5 + 6 + 7)
        if (hasPottedFinal && lastSuccessPot.score > 0) {
            let sub = lastSuccessPot.score;
            while (sub > 1) {
                scoreOnTable -= sub;
                sub--;
            }
        }
        return scoreOnTable
    }
)
const getPlayerScoreSelector = (player: PlayerPos) => {
    const potSelector = getPotListPlayerSelector()
    return createSelector(
        (state: StateGlobal) => potSelector(state, player),
        StarterSelector,
        (pots, starter) => pots.reduce((s, p) => (s + p.score), 0) + starter[player]
    )
}

export const ScoreBoardSelector = createStructuredSelector({
    users: NameSelector, 
    starter: StarterSelector,
    pottedReds: RedCountSelector, 
    scoreLeft: getPlayerScoreSelector("left"), 
    scoreRight: getPlayerScoreSelector("right"), 
    scoreOnTable: ScoreOnTableSelector,
    allPots: PotsSelector,
})

export const scoreReducer = createReducer<StateScore>(
    {
        pots: [],
    },
    {
        [ACTION_POT]: (state: StateScore, action: ScoreAction) => {
            let newPot: StatePot = {
                player: action.player,
                score: action.score,
                isFaul: false,
                isFreeball: false
            }
            let allPots = [...state.pots, newPot];
            let hasPottedFinal = state.pots.some(p => p.score == 0)
            if (action.isFinal && !hasPottedFinal && action.score > 1) {
                allPots = [...allPots, {player: action.player, score:0, isFreeball: false, isFaul: false}]
            }
            return {...state, pots: allPots}
        },
        [ACTION_FAUL]: (state: StateScore, action: ScoreAction) => {
            let otherPlayer: PlayerPos = action.player == 'left' ? 'right' : "left";
            let newPot: StatePot = {
                player: otherPlayer,
                score: action.score,
                isFaul: true,
                isFreeball: false
            }
            let pots = [...state.pots, newPot];
            let pottedReds = state.pots.reduce((s, p) => ((!p.isFaul && !p.isFreeball && p.score == 1) ? s + 1 : s), 0)
            let hasPottedFinal = state.pots.some(p => p.score == 0)
            if (pottedReds >= 15 && !hasPottedFinal && action.score > 1) {
                pots = [...pots, {player: otherPlayer, score:0, isFreeball: false, isFaul: false}]
            }
            return {...state, pots}
        },
        [ACTION_FREEBALL]: (state: StateScore, action: PlayerAction) => {
            let newPot: StatePot = {
                player: action.player,
                score: 1,
                isFreeball: true,
                isFaul: false
            }
            return {...state, pots: [...state.pots, newPot]}
        },
        [ACTION_FINAL_MISS]: (state, action: Action) => {
            if (state.pots.length == 0 || state.pots.some(p => p.score == 0)) {
                return state
            }
            let lastPot = state.pots.slice(-1)[0];
            return {...state, pots: [...state.pots, {player: lastPot.player, score: 0, isFaul: true, isFreeball: false}]}
        },
        [ACTION_UNDO]: (state: StateScore) => {
            if (state.pots.length == 0) {
                return state
            }
            let lastPot = state.pots.slice(-1)[0];
            let limit = -1;
            if (lastPot.score == 0 && !lastPot.isFaul) {
                limit = -2
            }
            return {...state, pots: state.pots.slice(0, limit)}
        }
    }
)