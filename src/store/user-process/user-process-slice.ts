import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction} from '../api-actions.ts';
import {RequestStatus} from '../../types/state.ts';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  loginStatus: RequestStatus;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  loginStatus: RequestStatus.Idle
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.loginStatus = RequestStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loginStatus = RequestStatus.Error;
      });
  }
});
