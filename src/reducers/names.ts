import {Action} from 'redux';
import { ACTION_SET_NAME } from '../actions/types';
import {setNameActionType} from '../actions/names';
import { createReducer } from './utils';
import { StateGlobal } from './index';
import { PlayerPos } from "./scores";


export type StateName = {
    [K in PlayerPos]: string
}

export const NameSelector: (s: StateGlobal) => StateName = (s) => s.names

export const nameReducer = createReducer<StateName>(
    {
        'left': 'User 1',
        'right': 'User 2'
    },
    {
        [ACTION_SET_NAME]: (state: StateName, action: setNameActionType) => {
            let {left, right} = action;
            // return Object.assign({}, state, {left, right})
            return {...state, left, right}
        }
    }
)