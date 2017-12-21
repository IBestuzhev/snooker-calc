import { combineReducers, Action } from 'redux';
import { nameReducer, StateName } from './names';
import { scoreReducer, StateScore } from './scores';
import { starterReducer, StateStarter } from "./starter";

export interface StateTest {
    compiler: string,
    framework: string
}
export interface StateGlobal {
    base: StateTest,
    names: StateName,
    score: StateScore,
    starter: StateStarter
}

export const someReducer = (state: StateTest, action: Action): StateTest => {
    if (state !== undefined) {
        return state;
    }
    return {
        compiler: "TypeScript", 
        framework: "React-Redux"
    }
}

export const rootReducer = combineReducers<StateGlobal>({
    base: someReducer,
    names: nameReducer,
    score: scoreReducer,
    starter: starterReducer
})
