import {Action, Reducer} from 'redux';

export interface ReducerMap<S> {
    [index: string]: Reducer<S>
}

export function createReducer<S>(initialState: S, reducerMap: ReducerMap<S>) {
    return (state = initialState, action: Action) => {
        const reducer: Reducer<S> = reducerMap[action.type];
        return reducer
            ? reducer(state, action)
            : state;
    };
}