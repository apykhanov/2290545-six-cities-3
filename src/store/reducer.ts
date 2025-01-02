import {DEFAULT_CITY, DEFAULT_SORTING} from '../const.ts';
import {OfferPreview} from '../types/offer.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeSortingTypes, fillOffers, loadOffers, setCity, setOfferDataLoadingStatus} from './action.ts';
import {Sorting} from '../types/sort.ts';


type InitialState = {
  city: string;
  offers: OfferPreview[];
  sortTypes: Sorting;
  isOffersLoaded: boolean;
  sortedOffers: OfferPreview[];
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortTypes: DEFAULT_SORTING,
  isOffersLoaded: false,
  sortedOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(changeSortingTypes, (state, action) => {
      state.sortTypes = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    });
});
