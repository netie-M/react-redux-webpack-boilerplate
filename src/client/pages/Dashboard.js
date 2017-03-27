import React from 'react';

export default class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Dashboard Page</h1>
                    </div>
                </div>
            </div>
        );
    }
}