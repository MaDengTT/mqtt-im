'use strict'

var all = {
    sequelize:{
        username: 'mqt',
        password: '123456mqt',
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