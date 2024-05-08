import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";

import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const Chatbox = () => {
  return (
    <div
      className=" h-full overflow-y-auto bg-gray-200   w-[76%]  "
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <ChatBoxHeader/>

      {/* <ChatBoxHeader /> */}
      {/* Sender Message */}
      <RecievedMessage />

      {/* Receiver Message */}

      <SentMessage/>
      
    </div>
  );
};

export default Chatbox;
