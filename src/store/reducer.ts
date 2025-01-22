import {DEFAULT_CITY, DEFAULT_SORTING} from '../const.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeSortingTypes, setCity} from './action.ts';
import {Sorting} from '../types/sort.ts';


type InitialState = {
  city: string;
  sortTypes: Sorting;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  sortTypes: DEFAULT_SORTING,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortingTypes, (state, action) => {
      state.sortTypes = action.payload;
    });
});
