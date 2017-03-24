import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export default class Navigation extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <HashRouter>
                        <ul className="nav in" id="side-menu">
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/forms">Forms</Link></li>
                            <li><Link to="/tables">Tables</Link></li>
                        </ul>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
