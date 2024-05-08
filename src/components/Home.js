import React from "react";
import SideBar from "./SideBar";
import ChatContacts from "./ChatContacts";
import Header from "./Header";
import Chatbox from "./Chatbox";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatContent from "./ChatContent";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="  ">
          <SideBar />
        </div>
        <div className="">
        <Outlet/>
         {/* <ChatContent/> */}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
