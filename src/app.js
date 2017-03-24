//css
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './styles/sb-admin-2.css';
import './styles/timeline.css';

//vendor
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

const root = document.getElementById('root');

ReactDOM.render(<Root/>, root);
