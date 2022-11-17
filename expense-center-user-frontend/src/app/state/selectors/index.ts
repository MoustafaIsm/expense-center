import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/interfaces/User';
import { Appstate } from '..';

const userFeature = createFeatureSelector<User>('user');

export const selectUser = (state: Appstate) => state.user;

export const getUser = createSelector(userFeature, (state: any) => state.user);
