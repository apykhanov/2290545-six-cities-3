import {NameSpace} from '../const.ts';
import {combineReducers} from '@reduxjs/toolkit';
import {userProcessSlice} from './user-process/user-process.slice.ts';
import {dataOffersSlice} from './data-offer/data-offers.slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcessSlice.reducer,
  [NameSpace.Offers]: dataOffersSlice.reducer,
});
