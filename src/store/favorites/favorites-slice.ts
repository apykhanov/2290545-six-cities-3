import {OfferPreview} from '../../types/offer.ts';
import {RequestStatus} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchFavoriteOffers} from '../api-actions.ts';


type FavoritesSlice = {
  favorites: OfferPreview[];
  favoritesLoadingStatus: RequestStatus;
}

const initialState: FavoritesSlice = {
  favorites: [],
  favoritesLoadingStatus: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.favoritesLoadingStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoritesLoadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoritesLoadingStatus = RequestStatus.Error;
      });
  },
});
