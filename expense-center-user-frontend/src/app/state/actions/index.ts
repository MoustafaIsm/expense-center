import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/User';

export const setUser = createAction(
  'SET_USER',
  props<{ user: User }>()
);

export const updateUser = createAction(
  'UPDATE_USER',
  props<{ user: User }>()
);
