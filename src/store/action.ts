import {createAction} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {Sorting} from '../types/sort.ts';
import {AuthorizationStatus} from '../const.ts';

export const setCity = createAction<string>('city/setCity');
export const changeSortingTypes = createAction<Sorting>('offers/changeSortingTypes');
export const loadOffers = createAction<OfferPreview[]>('data/loadOffers');
export const setOfferDataLoadingStatus = createAction<boolean>('offers/setOfferDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
