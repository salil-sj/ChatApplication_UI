import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarDetails } from "../store/userSlice";
import Cookies from "js-cookie";

const Home = () => {
  const dispatch = useDispatch();
 // const [isProfileOpen, setIsProfileOpen] = useState(true);

  const [sideBarData, setSideBarData] = useState(null);

  const [tokenData, setTokenData] = useState(null);
  const [userName , setUserName] = useState(null);

  const navigate = useNavigate();

  const isProfileOpen = useSelector(store=>store.userData.isProfileTab)

  

  useEffect(() => {
    // fetching token from local storage
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");
    console.log("JWT gathered is " + jwt);
    console.log("Username is " + user)

    if (jwt && jwt !== "undefined" && user && user !== "undefined") {
      setTokenData(jwt)
      setUserName(user);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    console.log("Token data in second render is............... " + tokenData);
    if(tokenData)
    getSideBarData();
  }, [tokenData]);

  const getSideBarData = async () => {
    const URL = BASE_URL + "/user/getRecentMessage";
    console.log("User name for fetch is ---------- " + userName)

    const result = await fetch(URL, {
      method: "POST",
      body: userName,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: tokenData,
      },
    });

    const data = await result.json();

    setSideBarData(data);
    dispatch(setSideBarDetails(data));
  };

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
