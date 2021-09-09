import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import AdminApp from './admin/App'
import MainApp from './main/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            {window.location.host.split(".")[0] === 'admin' ? <AdminApp/> : <MainApp/>}
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
