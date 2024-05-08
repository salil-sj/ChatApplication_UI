import React from "react";
import ChatBoxHeader from "./ChatBoxHeader";

import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const Chatbox = () => {
  return (
    <div
      className="h-screen overflow-y-auto bg-gray-200  flex flex-col w-[72%] "
      style={{
        scrollbarWidth: "thin",
      }}
    >
      <ChatBoxHeader />
      {/* Sender Message */}
      <RecievedMessage />

      {/* Receiver Message */}

      <SentMessage/>
    </div>
  );
};

export default Chatbox;
