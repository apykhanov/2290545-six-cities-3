import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';
import {OfferPreview} from '../../types/offer.ts';

export const getOffers = (state: State): OfferPreview[] =>
  state[NameSpace.Offers].offers;

export const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersDataLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Offers].hasError;
