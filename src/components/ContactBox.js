import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const ContactBox = ({ name, message }) => {
  return (
    <div className="bg-gray-50 shadow-sm  hover:bg-gray-200 flex border border-b-0">
      <div className="flex p-3 w-[80%]">
        <div className="relative">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center">
            <FaUserAlt className="text-gray-400 text-2xl my-auto" />
          </div>
          <div className="absolute bottom-0 right-0">
            <GoDotFill className="text-green-700 rounded-full text-xl" />
          </div>
        </div>

        
          <div className="">
            <h1 className="font-balsamiq ml-6">{name}</h1>
            <h2 className="font-balsamiq text-xs ml-6 mt-1">{message}</h2>
          </div>
          
        
      </div>
      <h1 className="ml-auto font-balsamiq text-xs p-2">11:25 AM</h1>
    </div>
  );
};

export default ContactBox;
