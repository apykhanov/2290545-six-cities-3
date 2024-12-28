import {createAction} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {Sorting} from '../types/sort.ts';

export const setCity = createAction<string>('city/setCity');
export const getOffers = createAction<OfferPreview[]>('offers/getOffers');
export const changeSortingTypes = createAction<Sorting>('offers/changeSortingTypes');
