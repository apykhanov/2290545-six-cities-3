import {store} from '../store';
import {AxiosInstance} from 'axios';
import {AuthorizationStatus} from '../const.ts';
import {OfferPreview} from './offer.ts';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OfferData = {
  offers: OfferPreview[];
  isOffersDataLoading: boolean;
  hasError: boolean;
};
