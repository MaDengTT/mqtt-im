var db = require("../db/database");
exports.msgToDb = function(uid,tid,content,then,err){
    db.IMChat.create({
        userId:uid,
        MsgContent:content,
        MsgType:0,
        toId:tid
    }).then(then).catch(err);
}

exports.deleateMsgToDb = function(id,then,err){
    db.IMChat.destroy({
        where:{
            Id:id
        }
    }).then(then).catch(err);
}