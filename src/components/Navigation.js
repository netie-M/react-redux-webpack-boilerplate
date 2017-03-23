import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Forms from '../pages/Forms';
import Tables from '../pages/Tables';

export default class Navigation extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/forms">Forms</Link></li>
                        <li><Link to="/tables">Tables</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/forms" component={Forms}/>
                    <Route path="/tables" component={Tables}/>
                </div>
            </Router>
        );
    }
}
