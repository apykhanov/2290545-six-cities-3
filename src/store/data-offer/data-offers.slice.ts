import {createSlice} from '@reduxjs/toolkit';
import {OfferData} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {loadOffers} from '../api-actions.ts';

const initialState: OfferData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const dataOffersSlice = createSlice({
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
