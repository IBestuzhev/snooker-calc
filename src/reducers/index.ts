import { combineReducers, Action } from 'redux';
import { nameReducer, StateName } from './names';
import { scoreReducer, StateScore } from './scores';
import { starterReducer, StateStarter } from "./starter";

export interface StateGlobal {
    names: StateName,
    score: StateScore,
    starter: StateStarter
}

export const rootReducer = combineReducers<StateGlobal>({
    names: nameReducer,
    score: scoreReducer,
    starter: starterReducer
})
