import { PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../slices/auth';

export function loginAction(state: IAuthState, action: PayloadAction<any>) {
  state.user = action.payload;
}
