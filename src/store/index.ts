import {configureStore} from '@reduxjs/toolkit';

import {createAPI} from '../services/api.ts';
import {rootReducer} from './root-reduсer.ts';

export const api = createAPI();

export const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
