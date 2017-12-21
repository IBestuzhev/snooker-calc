import {Action} from 'redux';
import { ACTION_SET_NAME } from '../actions/types';
import {setNameActionType} from '../actions/names';
import { createReducer } from './utils';

export interface StateName {
    left: string,
    right: string
}

export const nameReducer = createReducer(
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