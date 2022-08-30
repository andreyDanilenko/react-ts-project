import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'src/components';
import { offers } from './mocks/offers';
import { store } from './store';
import { fetchOffers } from './store/api-action';

store.dispatch(fetchOffers());
// eslint-disable-next-line no-console
console.log('store1', store);


const Setting = {
  OFFERS: offers,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App offers={Setting.OFFERS}/>
    </React.StrictMode>
  </Provider>,
);
