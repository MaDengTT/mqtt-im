'use strict'

module.exports = function(sequelize,DataTypes){
    var User = sequelize.define(
        'user',
        {
            userID:{
                field:'id',
                primaryKey:true,
                type:DataTypes.UUID,
                allowNull:true
            },
            userName:{
                field:'username',
                type:DataTypes.STRING,
                allowNull:false
            },
            password:{
                field:'password',
                type:DataTypes.STRING,
                allowNull:false
            },
            date:{
                field:'date',
                type:DataTypes.DATE
            }
        },
        {
            tableName:'user',
            timestamps:false,
            freezeTableName:true
        }
    )
    return User
}
