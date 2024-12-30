import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {loadOffers, setOfferDataLoadingStatus} from './action.ts';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const.ts';

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.cardOffer);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
