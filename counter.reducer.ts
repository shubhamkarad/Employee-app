import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './couter.actions';

export const intialState = 0

const _counterReducer = createReducer(
    intialState,
    on(increment, (state)=> state +1),
    on(decrement, (state)=> state -1),
    on(reset, (state)=> 0)
);

export function CounterReducer(state, action){
    return _counterReducer(state, action );
}