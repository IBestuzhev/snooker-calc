import { createReducer } from './utils';
import {ACTION_FAUL, ACTION_FREEBALL, ACTION_POT, ACTION_UNDO, ACTION_FINAL_MISS} from '../actions/types'
import {PlayerAction, ScoreAction, FinalAction} from '../actions/scores'

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
            let pottedReds = state.pots.reduce((s, p) => ((!p.isFaul && !p.isFreeball && p.score == 1) ? s + 1 : s), 0)
            let hasPottedFinal = state.pots.some(p => p.score == 0)
            if (pottedReds >= 15 && !hasPottedFinal && action.score > 1) {
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
        [ACTION_FINAL_MISS]: (state, action: FinalAction) => {
            if (state.pots.length == 0 || state.pots.some(p => p.score == 0)) {
                return state
            }
            let lastPot = state.pots.slice(-1)[0];
            return {...state, pots: [...state.pots, {player: lastPot.player, score: 0, isFaul: action.isMiss, isFreeball: false}]}
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