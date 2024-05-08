import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-2  bg-gray-200 h-screen  ">
      {/* <div className='bg-blue-950 '></div> */}
        <Link to={"/home"}>
        <IoChatbubblesOutline className="text-gray-600  text-4xl mx-auto mt-6 mb-10 hover:border-l-2  hover:border-blue-950" />
        </Link>

        <Link to={"/home/profile"}>
     
        <CiUser className=" text-gray-600 text-4xl mx-auto my-10 hover:border-l-2 hover:border-blue-950" />
        </Link>
      
        <IoIosNotificationsOutline className=" text-gray-600 text-4xl mx-auto my-10 hover:border-l-2 hover:border-blue-950" />
     
    </div>
  );
};

export default SideBar;
