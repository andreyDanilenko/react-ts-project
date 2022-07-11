import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/components/app/app';

const Setting = {
  RENTAL_COUNT: 30,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalCount={Setting.RENTAL_COUNT} />
  </React.StrictMode>,
);
