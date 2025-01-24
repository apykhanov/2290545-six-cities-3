import {NameSpace} from '../const.ts';
import {combineReducers} from '@reduxjs/toolkit';
import {userProcessSlice} from './user-process/user-process-slice.ts';
import {offersSlice} from './offers/offers-slice.ts';
import {appSlice} from './app/app-slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcessSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
});
