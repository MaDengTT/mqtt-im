var mqtt = require('mqtt')

var chatUtils = require("./utils/chatUtils");

//dbUtils.addUser("mmd","12345+")

// dbUtils.startSqlDB();

mqtturl = "mqtt://"+"www.mdshi.cn:1883"
var options = {
    clientId:'nodejs-158462'
}

topic_s = "/IM/MSGService";
topic_t = "/IM/ChatUser/";
topic_c = "/IM/Chat/000";
topic_chat = "/IM/Chat/";
var client = mqtt.connect(mqtturl,options);





client.on('connect',function(){
    client.subscribe(topic_c,function(err){
        if(err){
            console.log(err.toString());
        }
    })
})
/**
 * 11 -> c -》 send -》s
 * 12 -> s -》 send -》c
 * 20 -> 消息收到
 */
client.on("message",function(topic,message,packet){
    var msg = message.toString();
    console.log(msg);
    if(topic_c==topic){
        var key = msg.substr(0,2);
        var msgString = msg.substr(2);
        var jsonbean = JSON.parse(msgString);
        if(key=="11"){
            console.log(jsonbean);
            var tid = jsonbean.tUserId;
            var fid = jsonbean.fUserId;
            chatUtils.msgToDb(fid,tid,msgString,function(result){
                console.log(result);
            },function(err){
                console.log(err);
            })
            // if(tid){
            //     console.log(tid);
            //     client.publish(topic_chat+tid,"12"+msgString,function(error){
            //         console.log("to"+topic_chat+tid+":");
            //         if(error){
            //             console.log("to"+topic_chat+tid+":"+error);
            //         }
            //     });
            // }
        }
        // var jsonbean = JSON.parse(msg);
        // dbUtils.addIMChat(jsonbean.postid,jsonbean.toid,
        // jsonbean.message_type,jsonbean.message_content)
        // client.publish(topic_t+jsonbean.toid,msg)
    }
})