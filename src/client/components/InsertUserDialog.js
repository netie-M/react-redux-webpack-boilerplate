import React from 'react';
import {connect} from 'react-redux';

import {insertUser} from '../actions/userActions';

function mapStateToProps(store) {
    return {
        users: store.userReducer.users,
        userLoaded: store.userReducer.read,
        userCreated: store.userReducer.created,
        userUpdated: store.userReducer.updated,
        userDeleted: store.userReducer.deleted,
        errors: store.userReducer.error,
        message: store.userReducer.message
    }
}

class InsertUserDialog extends React.Component{
    constructor(){
        super();
        this.state = {
            fullname: '',
            gender: 'male',
            age: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.insertUser = this.insertUser.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'number' ? Number(target.value) : target.value;
        this.setState({
            [name]: value
        });

    }
    insertUser() {
        const newUser = this.state;
        //console.log(newUser);
        this.props.dispatch(insertUser(newUser));
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" data-toggle="modal" data-target="#insertUserDialog">
                    添加用户
                </button>
                <div className="modal fade" id="insertUserDialog" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">添加用户</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="inputFullName" className="col-sm-2 control-label">姓名</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" id="inputFullName" name="fullname" placeholder="姓名" value={this.state.fullname} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputGender" className="col-sm-2 control-label">性别</label>
                                        <div className="col-sm-10">
                                            <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                                                <option value="male">男</option>
                                                <option value="female">女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAge" className="col-sm-2 control-label">年龄</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="number" id="inputAge" placeholder="年龄" name="age" value={this.state.age} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                                <button type="button" className="btn btn-primary" onClick={this.insertUser}>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(InsertUserDialog);
