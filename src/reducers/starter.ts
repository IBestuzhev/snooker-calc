import { StarterAction } from "../actions/starter";
import { ACTION_SET_START } from "../actions/types";
import { createReducer } from "./utils";
import { StateGlobal } from "./index";
import { PlayerPos } from "./scores";

export type StateStarter = {
    [K in PlayerPos | "redRemaining"]: number
}

export const StarterSelector: (s: StateGlobal) => StateStarter = s => s.starter

export const starterReducer = createReducer<StateStarter>(
    {
        left: 0,
        right: 0,
        redRemaining: 15
    },
    {
        [ACTION_SET_START]: (state, action: StarterAction) => {
            let {left, right, redRemaining} = action;
            return {...state, left, right, redRemaining}
        }
    }
)