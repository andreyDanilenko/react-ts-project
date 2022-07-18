import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/components';
import { offers } from './mocks/offers';
import { reviews } from './mocks/comments';

const Setting = {
  RENTAL_COUNT: 30,
  OFFERS: offers,
  REVIEWS: reviews,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalCount={Setting.RENTAL_COUNT} reviews={Setting.REVIEWS} offers={Setting.OFFERS}/>
  </React.StrictMode>,
);
