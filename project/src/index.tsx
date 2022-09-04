import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App, ErrorMessage } from 'src/components';
import { store } from './store';
import { fetchOffers, checkAuthAction } from './store/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ErrorMessage/>
    <App/>
  </Provider>,
);
