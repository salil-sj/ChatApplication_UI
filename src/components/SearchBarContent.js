import React from "react";
import { FaRegUser, FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";

const SearchBarContent = ({ userData }) => {
  const { firstName, lastName, userName, email } = userData;

  return (
    <div className="bg-gray-100 p-2 flex mb-1  rounded-lg hover:bg-gray-300 ">
      <div className="flex items-center justify-center bg-gray-600 w-10 h-10 rounded-full  m-2">
        <FaUserAlt className="text-gray-400 " />
      </div>
      <div className="ml-4 mb-1">
        <div className="flex p-1 ">
        <FaRegUser className="text-green-700 text-sm mr-1 mt-[0.5px]" />
          <h1 className="font-balsamiq text-sm">
            {firstName} {lastName}
          </h1>
        </div>
       
        <div className="flex p-1">
        <MdOutlineEmail className="text-blue-700 mr-1 mt-[0.6px]   " />
          <h1 className="font-balsamiq text-sm ">{email}</h1>
        </div>
      </div>
    </div>
  );
};
//{firstName: 'lartikzz@gmail.com', lastName: 'Salil', userName: 'Joshi', email: 'salilsj161aza9@gmail.com'}

export default SearchBarContent;
