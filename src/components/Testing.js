import React from "react";
import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient = null;

const Testing = () => {

  const connect = () => {
    console.log("Connecting");

    const jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmMxMjMiLCJpc3MiOiJDSEFUQVBQTElDQVRJT04iLCJleHAiOjE5NzE1NDE3MzkzLCJpYXQiOjE3MTU0MTczOTN9.t3RyBV0C1ri95KYfuWdIv-i7OEdgea31zkSM86p9X94"; // Replace this with your actual JWT token

   
    var header = {
        'Authorization' : jwtToken
    }

    let sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(sock);
    stompClient.connect({Authorization: jwtToken}, onConnected)
  };

  const sendValue = ()=>{
    if(stompClient)
      {
        var chatMessage = {
          senderUserName:'sjosh183',
          receiverUserName:'abc123',
          groupId:123,
          content:"WTF bro"

        }
        stompClient.send("/app/private-message" , {} , JSON.stringify(chatMessage));
      }

  }





  const onConnected = ()=>{
    console.log("Connected to WS")
  }

  const onError = (err) => {
    console.log("***************ERROR***************")
    console.log(err);
    console.log(err.message)
    
}

  return <div>
    <button onClick={connect}>Connect</button>
    <button onClick={sendValue}>Send Value</button>

  </div>;
};

export default Testing;
