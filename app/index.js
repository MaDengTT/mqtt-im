var mqtt = require('mqtt')

var dbUtils = require('./dbUtils')

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

client.on("message",function(topic,message,packet){
    var msg = message.toString();
    console.log(msg);
    if(topic_c==topic){
        var key = msg.substr(0,2);
        var jsonbean = JSON.parse(msg.substr(2));
        if(key=="11"){
            console.log(jsonbean);
            var from = jsonbean.tUserId;
            if(from){
                console.log(from);
                client.publish(topic_chat+from,"12"+JSON.stringify(jsonbean),function(error){
                    if(error){
                        console.log("to"+topic_chat+from+":"+error);
                    }
                });
            }
        }
        // var jsonbean = JSON.parse(msg);
        // dbUtils.addIMChat(jsonbean.postid,jsonbean.toid,
        // jsonbean.message_type,jsonbean.message_content)
        // client.publish(topic_t+jsonbean.toid,msg)
    }
})