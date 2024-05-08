import React, { useState } from "react";
import SideBar from "./SideBar";
import ChatContacts from "./ChatContacts";
import Header from "./Header";
import Chatbox from "./Chatbox";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatContent from "./ChatContent";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  return (
    <div>
      <Header />

      <div className="flex ">
        <div className="  ">
          <SideBar />
        </div>
        <div>{isProfileOpen && <Profile />}</div>

        <div className="">
          <Outlet />
          {/* <ChatContent/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
