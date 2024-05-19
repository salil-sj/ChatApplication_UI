import React from "react";

const SendComponent = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 ">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow mr-2 p-2 border border-gray-300 rounded-md"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Send
      </button>
    </div>
  );
};

export default SendComponent;
