import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/components';
import { offers } from './mocks/offers';

const Setting = {
  OFFERS: offers,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={Setting.OFFERS}/>
  </React.StrictMode>,
);
