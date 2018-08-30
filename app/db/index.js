'use strict'

var config = require('../db/conf/index')
var Sequelize = require('sequelize');

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
module.exports = db;