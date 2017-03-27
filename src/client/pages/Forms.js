import React from 'react';

import Dialog from '../components/Dialog';

export default class Forms extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Forms</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Basic Form Elements
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>This is test text box</label>
                                            <input className="form-control" placeholder="Enter text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>This is test checkbox</label>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 1
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 2
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" value="" />Checkbox 3
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>This is test radio button</label>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Radio 1
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Radio 2
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Radio 3
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>This is test drop down list</label>
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <p>
                                            <button type="button" className="btn btn-primary">Submit</button>
                                            <button type="button" className="btn btn-default">Cancel</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                Form Validation
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>姓名</label>
                                        <input className="form-control" placeholder="姓名"/>
                                    </div>
                                    <div className="form-group">
                                        <label>姓名</label>
                                        <input className="form-control" placeholder="姓名"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">提交</button>
                                </form>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                弹窗
                            </div>
                            <div className="panel-body">
                                <Dialog/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
