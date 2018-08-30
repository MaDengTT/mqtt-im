'use strict'

var all = {
    sequelize:{
        username: 'xxx',
        password: 'xxx',
        database: 'mqt',
        host: "127.0.0.1",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
}

module.exports=all;