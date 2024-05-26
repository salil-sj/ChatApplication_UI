import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { formatRelativeTime } from "../utils/validator";
import { MdFiberNew } from "react-icons/md";

const ContactBox = ({ firstName, lastName ,  message, time , readFlag }) => {
  
  return (
    <div className="bg-gray-50 shadow-sm  hover:bg-gray-200 flex border border-b-0">
      <div className="flex p-3 w-[70%]">
        <div className="relative">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center">
            <FaUserAlt className="text-gray-400 text-2xl my-auto" />
          </div>
          <div className="absolute bottom-0 right-0">
            <GoDotFill className="text-green-700 rounded-full text-xl" />
          </div>
        </div>

        <div className="">
          <h1 className="font-balsamiq ml-6">{firstName} {lastName}</h1>
          <h2 className="font-balsamiq text-xs ml-6 mt-1">{message}</h2>
        </div>
      </div>

      {/* <div className="flex-col"> */}
      <h1 className="ml-auto font-balsamiq text-xs p-2 mt-2 ">{formatRelativeTime(time)}</h1>
      {!readFlag &&  <MdFiberNew className="text-red-600 text-xl mr-1 mt-1" />}
     
      {/* </div> */}
    </div>
  );
};

export default ContactBox;
