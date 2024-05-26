import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Cookies from "js-cookie";

import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarDetails, setToken, setUser, updateSideBarDetails } from "../store/userSlice";
import useWebSocketService from "../hooks/useWebSocketService";



const Home = () => {


  const [tokenData, setTokenData] = useState(null);
  const [userName, setUserName] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isProfileOpen = useSelector((store) => store.userData.isProfileTab);

  const sideData = useSelector(store=>store.userData.sideBarDetails);
  
  const {wsConnected, sendData , connect} = useWebSocketService();
 
  useEffect(() => {
    // fetching token from local storage
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");
  

    if (jwt && jwt !== "undefined" && user && user !== "undefined") {
      setTokenData(jwt);
      setUserName(user);
      dispatch(setToken(jwt))
      dispatch(setUser(user))
      connect(user,jwt);
    } else {
      navigate("/");
    }
  }, []);



  return (
    
    <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-grow overflow-hidden">
      <SideBar />
      <div className="flex-grow flex flex-col">
        {isProfileOpen && <Profile />}
        <Outlet/>
      </div>
    </div>
  </div>
  );
};

export default Home;
