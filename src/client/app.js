//css
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './client/styles/sb-admin-2.css';
import './client/styles/timeline.css';

//vendor
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './client/components/Root';
import testRedux from './client/redux/redux';

const root = document.getElementById('root');

ReactDOM.render(<Root/>, root);
