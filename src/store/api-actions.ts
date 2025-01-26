import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferPreview, OfferDetail} from '../types/offer.ts';
import {ThunkOptions} from '../types/state.ts';
import {APIRoute} from '../const.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData, UserData} from '../types/userData.ts';
import {AxiosInstance} from 'axios';
import {CommentPost, Review} from '../types/review.ts';

export const fetchOffers = createAsyncThunk<OfferPreview[], void, { extra: AxiosInstance }>(
  'offers/loadOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkOptions>(
  'user/login',
  async ({login, password}, {extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {login, password,});
    saveToken(data.token);
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  });

export const fetchOfferDetails = createAsyncThunk<OfferDetail, string, { extra: AxiosInstance }>(
  'details/fetchOfferDetails',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferDetail>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchOfferComments = createAsyncThunk<Review[], string, { extra: AxiosInstance }>(
  'comments/fetchOfferComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);
export const sendComment = createAsyncThunk<Review, CommentPost, { extra: AxiosInstance }>(
  'comments/sendComment',
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<OfferPreview[], string, { extra: AxiosInstance }>(
  'details/fetchNearbyOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);
