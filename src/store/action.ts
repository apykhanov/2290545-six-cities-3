import {createAction} from '@reduxjs/toolkit';
import {Sorting} from '../types/sort.ts';
import {AppRoute} from '../const.ts';

export const setCity = createAction<string>('city/setCity');
export const changeSortingTypes = createAction<Sorting>('offers/changeSortingTypes');
export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
