import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const ChatBoxHeader = () => {
  return (
    <div>
      <div className="bg-gray-300 shadow-lg  flex  rounded-sm">
        <div className="flex p-2">
          <div className="relative">
            <div className="w-9 h-9 bg-gray-300 rounded-full flex justify-center">
              <FaUserAlt className="text-gray-400 text-xl my-auto" />
            </div>
            <div className="absolute bottom-0 right-0">
              <GoDotFill className="text-green-700 rounded-full text-xl" />
            </div>
          </div>
          <div>
            <h1 className="font-balsamiq ml-6 mt-2"> Salil Joshi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
