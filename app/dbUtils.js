var sqldb = require('./db/index')



exports.startSqlDB = function(){
    return sqldb.sequelize.sync({force: false}).then(function() {
        console.log("Server successed to start");
    }).catch(function(err){
        console.log("Server failed to start due to error: %s", err);
    });
}

exports.addIMChat = function(cid,tid,mtype,mcontent){
    return sqldb.IMChat.create({
        userID:cid,
        MsgType:mtype,
        MsgContent:mcontent,
        toId:tid
    })
}

exports.addUser = function(userName,password){
    return sqldb.User.create({
        userName:userName,
        password:password
    })
}