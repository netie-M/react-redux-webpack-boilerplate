import React from 'react';

import Navigation from './Navigation';

export default class Root extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <Navigation/>
            </div>
        );
    }
}
