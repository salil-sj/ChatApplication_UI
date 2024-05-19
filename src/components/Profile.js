import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlinePassword } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BASE_URL } from "../utils/constants";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Profile = ({ isOpen }) => {
  const navigate = useNavigate();
  const [isProfileEditable, setIsProfileEditable] = useState(false);
  const[profileData , setProfileData] = useState(null);

  const handleLogout = ()=>{
    Cookies.remove("jwtToken");
     Cookies.remove("username");
     navigate("/")
  }

  const fetchProfileData = async()=>{
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");

    const URL = BASE_URL+"/user/getProfileDetails"
   
    const data = await fetch(URL, {
      method: "POST",
      body: user,
      headers: {
        "Authorization" : jwt

      },
     
    });

    const result = await data.json();
    setProfileData(result);
    
  }

  useEffect(()=>{
    fetchProfileData()
  },[])

  return (
    <div className="fixed top-[22%]  w-full max-w-[30rem] bg-gray-300 z-50 shadow-lg rounded-lg overflow-hidden md:top-1/2 md:transform md:-translate-y-1/2">
      <div className="flex items-center justify-center bg-gray-600 w-32 h-32 rounded-full mt-6 mx-6">
        <FaUserAlt className="text-gray-400 text-6xl" />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center my-4">
          <RiShieldUserLine className="text-red-700" />
          <h1 className="ml-2 font-balsamiq text-sm"> {profileData?.username}</h1>
        </div>
     
        <div className="flex items-center my-4">
          <FaRegUser className="text-green-700" />
          <h1 className="ml-2 font-balsamiq text-sm"> {profileData?.first_name} {profileData?.last_name}</h1>
        </div>

        <div className="flex items-center my-4">
          <MdOutlineEmail className="text-blue-700" />
          <h1 className="ml-2 font-balsamiq text-sm">{profileData?.email} </h1>
        </div>

        <div className="flex items-center my-4">
          <IoPhonePortraitOutline />
          {isProfileEditable ? (
            <input
              type="text"
              className="ml-2 font-balsamiq text-sm bg-gray-300 w-[60%] border-b border-gray-600 outline-none"
              defaultValue="8569858785"
            />
          ) : (
            <h1 className="ml-2 font-balsamiq text-sm"> {profileData?.phone_number}</h1>
          )}
          {isProfileEditable ? (
            <TiTick className="text-lg ml-1 text-green-700" />
          ) : (
            <MdOutlineModeEdit
              className="text-lg ml-1 cursor-pointer"
              onClick={() => setIsProfileEditable(true)}
            />
          )}
        </div>

        <div className="flex items-center my-4">
          <MdOutlinePassword />
          <h1 className="ml-2 font-balsamiq text-sm"> **********</h1>
        </div>
        <button className="bg-red-800 hover:bg-red-900 text-white rounded-lg p-2 w-full mt-4"
        onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
