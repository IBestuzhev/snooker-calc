import { ACTION_SET_START } from "./types";
import { StateStarter } from "../reducers/starter";
import { Action } from "redux";

export type StarterAction = StateStarter & Action

export function actionSetStart(left: number, right: number, redRemaining: number): StarterAction {
    return {
        type: ACTION_SET_START,
        left, right, redRemaining
    }
}