import React, { useState } from "react";
import useWebSocketService from "../hooks/useWebSocketService";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/messageSlice";

const SendComponent = () => {
  const { wsConnected, sendData } = useWebSocketService();
  const [sendMessage, setSendMessage] = useState("");
  const chatRecipient = useSelector(
    (store) => store.userData.currrentRecipient
  );
  const currentUser = useSelector((store) => store.userData.userName);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    console.log("handling send messge.....")
    
    var chatMessage = {
      senderUserName: currentUser,
      receiverUserName: chatRecipient.userName,
      content: sendMessage,
      createdAt: new Date(),
      read: false

    };
    sendData(chatMessage)
  
    dispatch(setMessages(
      {
        recipientUser : chatRecipient.userName,
      data : {
        senderUserName : currentUser,
        receiverUserName : chatRecipient.userName,
        content : sendMessage,
        timeStamp : new Date()
      }
      }
    ))
    setSendMessage('')
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 font-balsamiq ">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow mr-2 p-2 border border-gray-300 rounded-md"
        value={sendMessage} 
        onChange={(e) => {
          setSendMessage(e.target.value);
        }}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default SendComponent;
