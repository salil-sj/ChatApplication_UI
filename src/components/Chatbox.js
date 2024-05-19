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
      <ChatBoxHeader />

      {/* <ChatBoxHeader /> */}
      {/* Sender Message */}
      <RecievedMessage />

      {/* Receiver Message */}

      <SentMessage />

      <div className="flex justify-between items-center p-4">
        <input
          type="text"
         
          placeholder="Type your message..."
          className="flex-grow mr-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
      

      
    </div>
   
  
  );
};

export default Chatbox;
