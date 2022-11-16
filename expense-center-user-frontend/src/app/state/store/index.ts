/* eslint-disable @typescript-eslint/naming-convention */
import { Action } from '@ngrx/store';
import { User } from '../../interfaces/User';

export interface Appstate {
  user: User;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export const initialState: Appstate = {
  user: null
};

export const Actions = {
  USER_SET: 'USER_SET',
  USER_UPDATED: 'USER_UPDATED',
  USER_DELETED: 'USER_DELETED'
};

export const userReducer = (state = initialState, action: ActionWithPayload<User>): Appstate => {
  switch (action.type) {
    case Actions.USER_SET:
      return {
        ...state,
        user: action.payload
      };
    case Actions.USER_UPDATED:
      return {
        ...state,
        user: action.payload
      };
    case Actions.USER_DELETED:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
