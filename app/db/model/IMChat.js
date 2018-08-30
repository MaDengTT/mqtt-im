'use strict'

module.exports = function(sequelize,DataTypes){

    var IMChat = sequelize.define(
        'IMChat',
        {
            ID:{
                field:'id',
                primaryKey:true,
                type:DataTypes.INTEGER,
                allowNull:true
            },
            userID:{
                field:'user_id',
                type:DataTypes.INTEGER,
                allowNull:false
            },
            MsgType:{
                field:'message_type',
                type:DataTypes.STRING,
                allowNull:false
            },
            MsgContent:{
                field:'message_content',
                type:DataTypes.STRING,
                allowNull:true
            },
            toId:{
                field:'to_id',
                type:DataTypes.INTEGER
            },
            create_time:{
                field:'create_time',
                type:DataTypes.DATE,
            }
        },
        {
            tableName:'im_chat',
            timestamps:false,
            freezeTableName:true
        }
    )
    return IMChat
}