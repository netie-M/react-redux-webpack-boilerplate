import React from 'react';

import Navigation from './Navigation';


export default class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        const style = {
            marginBottom: 0
        };
        return(
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={style}>
                <div className="navbar-header">
                    <a className="navbar-brand">夸客金融</a>
                </div>
                <Navigation/>
            </nav>
        );
    }
}