'use strict'

module.exports = function(sequelize,DataTypes){

    var IMChat = sequelize.define(
        'IMChat',
        {
            Id:{
                field:'id',
                primaryKey:true,
                type:DataTypes.INTEGER,
                autoIncrement: true
            },
            userId:{
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
            createTime:{
                field:'create_time',
                type:DataTypes.DATE,
            },
            isSend:{
                field:'is_send',
                type:DataTypes.BOOLEAN,
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