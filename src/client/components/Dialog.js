import React from 'react';

export default class Dialog extends React.Component{
    render(){
        return(
            <div>
                <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#dialogSample">
                    打开弹窗
                </button>
                <div className="modal fade" id="dialogSample" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">短歌行 - 曹操</h4>
                            </div>
                            <div className="modal-body">
                                对酒当歌，人生几何！<br/>
                                譬如朝露，去日苦多。<br/>
                                慨当以慷，忧思难忘。<br/>
                                何以解忧？惟有杜康。<br/>
                                青青子衿，悠悠我心。<br/>
                                但为君故，沉吟至今。<br/>
                                呦呦鹿鸣，食野之苹。<br/>
                                我有嘉宾，鼓瑟吹笙。<br/>
                                明明如月，何时可掇？<br/>
                                忧从中来，不可断绝。<br/>
                                越陌度阡，枉用相存。<br/>
                                契阔谈，心念旧恩。<br/>
                                月明星稀，乌鹊南飞。<br/>
                                绕树三匝，何枝可依？<br/>
                                山不厌高，海不厌深。<br/>
                                周公吐哺，天下归心。<br/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                <button type="button" className="btn btn-primary">确定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
