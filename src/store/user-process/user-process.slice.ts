import {UserProcess} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction} from '../api-actions.ts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown
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
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
