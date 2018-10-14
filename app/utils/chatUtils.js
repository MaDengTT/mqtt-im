var db = require("../db/database");
exports.msgToDb = function(uid,tid,content,then,err){
    db.IMChat.create({
        userId:uid,
        MsgContent:content,
        toId:tid
    }).then(then).catch(err);
}