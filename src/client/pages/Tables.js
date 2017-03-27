import React from 'react';
import {connect} from 'react-redux';

import {getDummyUser, getUsers} from '../actions/userActions';

function mapStateToProps(store) {
    return {
        users: store.userReducer.users,
        userFetched: store.userReducer.fetched
    }
}

class Tables extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        //this.props.dispatch(getDummyUser());
        this.props.dispatch(getUsers());
    }
    render(){
        const users = this.props.users;
        const mappedUsers = users.map(
            user => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td>
                    </tr>
            );
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
                               <div className="table-responsive">
                                   <table className="table table-striped table-bordered table-hover">
                                       <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>姓名</th>
                                                <th>性别</th>
                                                <th>年龄</th>
                                            </tr>
                                       </thead>
                                       <tbody>{mappedUsers}</tbody>
                                   </table>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default connect(mapStateToProps)(Tables);