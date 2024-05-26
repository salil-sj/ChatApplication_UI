import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/jason-dent-UNDqO_CL30s-unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser, setUserName } from "../store/userSlice";

const Login = () => {
  const username = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

// User should go to home page if already logged in:
  useEffect(()=>{
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");
    
    if (jwt && jwt !== "undefined" && user && user !== "undefined") {
      navigate("/home")
    } else {
      return;
    }
  },[])

  const handleLogin = () => {
    const emailAddress = username.current.value;
    const pwd = password.current.value;

    authorizeUser(emailAddress, pwd)
      .then((response) => {
  
        // Storing token in cookie:
        storeToken(response.jwtToken ,  response.userName);
       // dispatch(setUser(response.userName))
        navigate("/home")
        
      })
      .catch((err) => {
        setErrorMessage("Invalid User name or password");
      });
  };

  const authorizeUser = async (usr, pwd) => {
    const URL = "http://localhost:8080/user/login";
    const data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        username: usr,
        password: pwd,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    if (data.status == 401) {
      throw new Error("Unauthorized");
    }

    const payload = await data.json();
    return payload;
  };

  const storeToken = (token,username)=>{
    Cookies.set("jwtToken" , token);
    Cookies.set("username" , username);
  }

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat font-balsamiq"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-md p-8">
        <form
          className="font-[sans-serif] flex flex-col space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="font-balsamiq">
            <label className="mb-1">Username</label>
            <input
              ref={username}
              type="email"
              placeholder="Enter Email"
              className="px-4 py-3 bg-blue-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded"
            />
          </div>

         
          <div className="font-balsamiq">
            <label className="mb-1">Password</label>
            <input
              ref={password}
              type="password"
              placeholder="Enter Password"
              className="px-4 py-3 bg-blue-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
            />
          </div>
          <h1 className="font-balsamiq text-red-500 text-sm">{errorMessage}</h1>

          <button
            type="button"
            className="w-full px-4 py-2.5 text-sm font-balsamiq bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <Link to="/signup" >
          <h1 className="text-blue-800 mt-4">Do not have an account? Sign up here</h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;
