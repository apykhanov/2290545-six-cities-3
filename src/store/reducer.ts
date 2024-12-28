import {DEFAULT_CITY, DEFAULT_SORTING} from '../const.ts';
import {OfferPreview} from '../types/offer.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeSortingTypes, getOffers, setCity} from './action.ts';
import {offersMock} from '../mock/offers.ts';
import {Sorting} from '../types/sort.ts';

type InitialState = {
  city: string;
  offers: OfferPreview[];
  sortTypes: Sorting;

}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: offersMock,
  sortTypes: DEFAULT_SORTING,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingTypes, (state, action) => {
      state.sortTypes = action.payload;
    });
});
