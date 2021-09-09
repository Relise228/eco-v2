import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import AdminApp from './admin/App'
import MainApp from './main/App'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import {theme} from "./theme/theme";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode='lightS'/>
                    {window.location.host.split(".")[0] === 'admin' ? <AdminApp/> : <MainApp/>}
                </ChakraProvider>
            </BrowserRouter>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
