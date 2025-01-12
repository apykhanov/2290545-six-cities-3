import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {offersMock} from './mock/offers.ts';
import {reviewMock} from './mock/reviews.ts';
import {cardOffersMock} from './mock/card-offers.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers={offersMock} reviews={reviewMock} cardOffers={cardOffersMock} />
    </Provider>
  </React.StrictMode>
);
