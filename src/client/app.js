//css
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './styles/sb-admin-2.css';
import './styles/timeline.css';

//vendor
import bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Root from './components/Root';
import store from './store/store';
//import reduxClient from './redux/client';

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    root);
