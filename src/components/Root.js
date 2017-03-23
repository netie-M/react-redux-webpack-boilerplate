import React from 'react';

import Navigation from './Navigation';

export default class Root extends React.Component{
    constructor(){
        super();
        this.state = {
            link: 'Fuck you'
        }
    }
    render(){
        setTimeout(() => {
            this.setState({
                link: 'Mother fuck'
            });
        }, 2000);
        return(
            <div>
                <h1>Hello World</h1>
                <Navigation link = {this.state.link}/>
            </div>
        );
    }
}
