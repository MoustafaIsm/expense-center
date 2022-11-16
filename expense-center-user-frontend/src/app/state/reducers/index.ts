/* eslint-disable @typescript-eslint/naming-convention */
import { createReducer, on } from '@ngrx/store';
import { initialState } from '..';
import { setUser, updateUser } from '../actions';

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action) => ({
    ...state,
    user: action.user
  })),
  on(updateUser, (state, action) => ({
    ...state,
    user: action.user
  }))
);

