import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleProfileTab } from "../store/userSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleShowProfile = () => {
    dispatch(toggleProfileTab());
  };

  return (
    <div className="p-2  bg-gray-200 ">
      <Link to={"/home"}>
        <IoChatbubblesOutline className="text-gray-600  text-4xl mx-auto mt-6 mb-10 hover:border-l-2  hover:border-blue-950" />
      </Link>

      <CiUser
        className=" text-gray-600 text-4xl mx-auto my-10 hover:border-l-2 hover:border-blue-950"
        onClick={handleShowProfile}
      />

      <IoIosNotificationsOutline className=" text-gray-600 text-4xl mx-auto my-10 hover:border-l-2 hover:border-blue-950" />
    </div>
  );
};

export default SideBar;
