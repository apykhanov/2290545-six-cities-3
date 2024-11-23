import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {offersMock} from './mock/offers.ts';
import {cardOffersMock} from './mock/card-offers-mock.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offersMock} reviews={cardOffersMock} />
  </React.StrictMode>
);
