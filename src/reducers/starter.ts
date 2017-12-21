import { StarterAction } from "../actions/starter";
import { ACTION_SET_START } from "../actions/types";
import { createReducer } from "./utils";

export interface StateStarter {
    left: number,
    right: number,
    redRemaining: number
}

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