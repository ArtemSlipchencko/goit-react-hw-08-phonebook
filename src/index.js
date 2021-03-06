import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store/store";
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store} >
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);
