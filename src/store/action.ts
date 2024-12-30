import {createAction} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {Sorting} from '../types/sort.ts';

export const setCity = createAction<string>('city/setCity');
export const fillOffers = createAction<OfferPreview[]>('offers/fillOffers');
export const changeSortingTypes = createAction<Sorting>('offers/changeSortingTypes');
export const loadOffers = createAction<boolean>('data/loadOffers');
