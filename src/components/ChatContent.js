import React, { useEffect } from "react";
import ChatContacts from "./ChatContacts";
import Chatbox from "./Chatbox";
import ChatBoxHeader from "./ChatBoxHeader";
import SendComponent from "./SendComponent";
import { useOutletContext } from "react-router-dom";

const ChatContent = () => {

  return (
    <div className="flex ">
      <ChatContacts />
      <div className=" w-[86%] bg-gray-200">
        <div className="flex-grow overflow-y-auto h-screen">
          <ChatBoxHeader />
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
