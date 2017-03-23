import React from 'react';

export default class Navigation extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <ul>
                <li>Dashboard</li>
                <li>Forms</li>
                <li>Tables</li>
            </ul>
        );
    }
}
