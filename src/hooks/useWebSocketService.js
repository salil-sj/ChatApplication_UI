import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { setMessages } from "../store/messageSlice";
import { updateReadFlag, updateSideBarDetails } from "../store/userSlice";
import { TfiRulerAlt } from "react-icons/tfi";

let stompClient = null;
let i = 0;

const useWebSocketService = () => {
  const [wsConnected, setWsConnected] = useState(false);
  const dispatch = useDispatch();

  const profileDetailsForUsername = useSelector(
    (store) => store.userData.profileDetails
  );


  // const loggedInUser = useSelector((store) => store.userData.userName);
  // const jwt = useSelector((store)=>store.userData.token)

  const connect = (loggedInUser, jwt) => {
    if (loggedInUser != undefined && jwt != undefined) {
      let sock = new SockJS("http://localhost:8080/ws");
      stompClient = over(sock);
      stompClient.connect(
        { Authorization: jwt },
        () => onConnected(loggedInUser, jwt),
        onError
      );
    }
  };

  const onConnected = (loggedInUser, jwt) => {
    setWsConnected(true);
    // consume data from WS it is connected:
    if (stompClient.connected) {
      stompClient.subscribe(
        "/user/" + loggedInUser + "/private",
        onPrivateMessage
      );
    }
  };

  const onPrivateMessage = (payload) => {
    console.log("Private msg recieved");

    const result = JSON.parse(payload.body);
    console.log(result);

    var msg = {
      recipientUser: result.senderUserName,
      data: {
        senderUserName: result.senderUserName,
        receiverUserName: result.receiverUserName,
        content: result.content,
        timeStamp: new Date(),
      },
    };

    dispatch(setMessages(msg));

    /*
    These details are required for side bar as soon as a new msg is recieved- So the side bar should also updatte itself quickly
    * The msg do not contain first + last name , but has username
    * Get the data from the store, if not make an API call.
    */

    var msgForSideBar = {
      firstName: result.senderFirstName,
      lastName: result.senderLastName,
      userName: result.senderUserName,
      latestContent: result.content,
      createdAt: new Date(),
      readFlag: result.read,
    };
    dispatch(updateSideBarDetails(msgForSideBar));


  }


  const onError = (err) => {
    console.log("-----ERROR------" + err);
  };

  // Send data to end point (Direct messaging:)
  const sendData = (chatData) => {
    if (stompClient) {
      var chatMessage = chatData;
      stompClient.send("/app/private-message", {}, JSON.stringify(chatData));
    } else {
      console.log("Stomp client is null " + stompClient);
    }
  };



  return { wsConnected, sendData, connect };
};

export default useWebSocketService;
