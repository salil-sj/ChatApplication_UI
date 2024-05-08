import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
const Profile = ({ isOpen }) => {
  return (
    <div
      className={`fixed ml-1 top-[140px] h-full w-[28%] bg-gray-300 z-50 transition-transform duration-500  rounded-lg  shadow-lg ease-in-out `}
    >
      <div className="">
        <div className="w-32 h-32 bg-gray-600 rounded-full flex justify-center  mt-6 ml-8">
          <FaUserAlt className="text-gray-400 text-6xl my-auto" />
        </div>

        <div className="ml-12 ">
          <label className="cursor-pointer">
            <span className="relative">
              <input type="file" className="hidden" />
              <span className=" px-4   text-gray-700 flex">
                <CiEdit className="text-lg font-bold mt-1 " />
                <h1 className="font-balsamiq mt-1 text-sm">Edit</h1>
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="ml-4 mt-6">
        <div className="flex  my-4">
          <RiShieldUserLine className="text-red-700" />
          <h1 className="ml-2 font-balsamiq text-sm"> sjosh183</h1>
        </div>

        <div className="flex my-4">
          <FaRegUser  className="text-green-700"/>
          <h1 className="ml-2 font-balsamiq text-sm"> Salil Joshi</h1>
        </div>

        <div className="flex my-4">
          <MdOutlineEmail className="text-blue-700"/>
          <h1 className="ml-2 font-balsamiq text-sm"> salilsj1619@gmail.com</h1>
        </div>

        <div className="flex my-4">
          <IoPhonePortraitOutline />
          <h1 className="ml-2 font-balsamiq text-sm"> 8569858785</h1>
        </div>

        <div className="flex my-4">
          <MdOutlinePassword />
          <h1 className="ml-2 font-balsamiq text-sm"> **********</h1>
        </div>
      </div>
      <button className="bg-red-800 hover:bg-red-900 m-2 text-white p-2 rounded-lg ml-4 w-[30%]">Logout</button>
    </div>
  );
};

export default Profile;
