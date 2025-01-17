import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {loadOffers, requireAuthorization, setOfferDataLoadingStatus} from './action.ts';
import {ThunkOptions} from '../types/state.ts';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {AuthData} from '../types/authData.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/userData.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setOfferDataLoadingStatus(true));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({login, password}, {dispatch, extra: api}) => {
    const { data: {token} } = await api.post<UserData>(APIRoute.Login, {
      login,
      password,
    });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  });

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  });


