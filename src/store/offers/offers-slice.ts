import {createSlice} from '@reduxjs/toolkit';
import {loadOffers} from '../api-actions.ts';
import {OfferPreview} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';

type OfferData = {
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
  hasError: boolean;
};

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(loadOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(loadOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});
