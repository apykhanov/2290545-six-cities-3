import {DEFAULT_CITY} from '../const.ts';
import {OfferPreview} from '../types/offer.ts';
import {createReducer} from '@reduxjs/toolkit';
import {getOffers, setCity} from './action.ts';
import {offersMock} from '../mock/offers.ts';

type InitialState = {
  city: string;
  offers: OfferPreview[];
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: offersMock,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });
});
