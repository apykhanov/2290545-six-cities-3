import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {ThunkOptions} from '../types/state.ts';
import {APIRoute} from '../const.ts';
import {AuthData} from '../types/authData.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/userData.ts';
import {AxiosInstance} from 'axios';

export const loadOffers = createAsyncThunk<OfferPreview[], void, { extra: AxiosInstance }>(
  'offers/loadOffers',
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({login, password}, {extra: api}) => {
    const { data: {token} } = await api.post<UserData>(APIRoute.Login, {
      login,
      password,
    });
    saveToken(token);
  });

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });
