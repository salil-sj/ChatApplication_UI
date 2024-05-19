import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";

import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import SendComponent from "./SendComponent";

const Chatbox = () => {
  return (
    <div
      className=" max-h-screen bg-gray-200  "
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <div className="max-h-[440px]  overflow-y-auto flex flex-col-reverse">
        <RecievedMessage />

        <SentMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
      </div>
      <SendComponent/>
    </div>
  );
};

export default Chatbox;
