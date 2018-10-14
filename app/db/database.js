'use strict'

var Sequelize = require('sequelize');
var config = {
    sequelize:{
        username: 'mqt',
        password: '123456mqt',
        database: 'mqt',
        host: "35.236.164.76",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
}

var db = {
    sequelize:new Sequelize(
        config.sequelize.database,
        config.sequelize.username,
        config.sequelize.password,
        config.sequelize
    )
}
db.User = db.sequelize.import('../db/model/User.js');
db.IMChat = db.sequelize.import('../db/model/IMChat.js');

db.sequelize.sync({force:false}).then(function(){
    console.log("Server successed to start");
}).catch(function(err){
    console.log("Server failed to start due to error: %s", err);
});
module.exports = db;
