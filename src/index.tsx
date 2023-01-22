import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "./redux/store/store";
import { Toaster } from 'react-hot-toast';

import { Styles as GlobalStyles } from "./styles/global";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
