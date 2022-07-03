import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from '../actions/auth';

export interface IAuthState {
  user: object;
  token: string;
}

const initialState: IAuthState = {
  user: {},
  token: '',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: loginAction,
  },
});

export const { login } = authReducer.actions;

export default authReducer.reducer;
