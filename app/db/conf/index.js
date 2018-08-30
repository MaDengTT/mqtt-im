'use strict'

var all = {
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

module.exports=all;