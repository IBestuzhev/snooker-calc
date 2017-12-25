import {Action} from "redux";
import * as actionTypes from "./types";
import {PlayerPos} from "../reducers/scores"

export interface PlayerAction extends Action {
    player: PlayerPos
}
export interface ScoreAction extends PlayerAction {
    score: number,
    isFinal?: boolean
}

export function actionPot(player: PlayerPos, score: number, isFinal = false): ScoreAction {
    return {
        type: actionTypes.ACTION_POT,
        player, 
        score,
        isFinal
    }
}

export function actionFaul(player: PlayerPos, score: number): ScoreAction {
    return {
        type: actionTypes.ACTION_FAUL,
        player, 
        score
    }
}

export function actionFreeball(player: PlayerPos): PlayerAction {
    return {
        type: actionTypes.ACTION_FREEBALL,
        player
    }
}

export function actionFinalMiss(): Action {
    return {
        type: actionTypes.ACTION_FINAL_MISS,
    }
}

export function actionUndo(): Action {
    return {
        type: actionTypes.ACTION_UNDO
    }
}