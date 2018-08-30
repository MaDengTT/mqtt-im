var mqtt = require('mqtt')

var dbUtils = require('./dbUtils')

//dbUtils.addUser("mmd","12345+")

dbUtils.startSqlDB();

console.log("aa");

mqtturl = "mqtt://"+"127.0.0.1:1883"
var options = {
    clientId:'nodejs-158462'
}

topic_s = "/IM/MSGService";
topic_t = "/IM/ChatUser/"
var client = mqtt.connect(mqtturl,options);



client.on("message",function(topic,message,packet){
    if(topic_s==topic){
        var msg = message.toString();
        var jsonbean = JSON.parse(msg);
        dbUtils.addIMChat(jsonbean.postid,jsonbean.toid,
        jsonbean.message_type,jsonbean.message_content)
        client.publish(topic_t+jsonbean.toid,msg)
    }
})

client.on('connect',function(){
    client.subscribe(topic_s,function(err){
        if(!err){
            
        }
    })
})