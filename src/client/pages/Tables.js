import React from 'react';

export default class Tables extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
           <div>
               <div className="row">
                   <div className="col-lg-12">
                       <h1 className="page-header">Tables</h1>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-12">
                       <div className="panel panel-info">
                           <div className="panel-heading">
                               表单样例
                           </div>
                           <div className="panel-body">
                               表单样例
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}