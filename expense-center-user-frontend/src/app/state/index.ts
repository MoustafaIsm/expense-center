import { User } from '../interfaces/User';

export interface Appstate {
  user: User;
}

export const initialState: Appstate = {
  user: null
};
