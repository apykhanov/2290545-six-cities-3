import {createAction} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';

export const setCity = createAction<string>('city/setCity');
export const getOffers = createAction<OfferPreview[]>('offers/getOffers');
