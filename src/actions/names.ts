import { Action } from 'redux';
import { ACTION_SET_NAME } from './types';

export interface setNameActionType extends Action {
    left: string,
    right: string
}

export function setName(left = 'User 1', right = 'User 2'): setNameActionType {
    return {
        type: ACTION_SET_NAME,
        left, 
        right,
    }
}