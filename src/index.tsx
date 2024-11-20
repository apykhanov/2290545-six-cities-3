import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Setting} from './pages/main/main.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardCount={Setting.cardCount} />
  </React.StrictMode>
);
