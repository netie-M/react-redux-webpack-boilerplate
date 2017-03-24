import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import Forms from '../pages/Forms';
import Tables from '../pages/Tables';

export default class Root extends React.Component{
    constructor(){
        super();
    }
    render(){
        const style = {
          minHeight: '561px'
        };
        return(
            <div id="wrapper">
                <Header/>
                <HashRouter>
                    <div id="page-wrapper" style={style}>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/forms" component={Forms}/>
                            <Route path="/tables" component={Tables}/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
