import React, { useRef, useState } from "react";
import { emailValidation, passwordValidation } from "../utils/validator";
import { BASE_URL } from "../utils/constants";
import backgroundImage from "../assets/jason-dent-UNDqO_CL30s-unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

  const navigate = useNavigate();

  const [firstNameExists, setFirstNameExists] = useState(true);
  const [lastNameExists, setLastNameExists] = useState(true);
  const [isEmailValidated, setIsEmailValidated] = useState(true);
  const [userNameExists, setIsUserNameExists] = useState(true);
  const [isPasswordValidated, setIsPasswordValidated] = useState(true);

  const [userExists, setUserExists] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameErrorFlag, setUserNameErrorFlag] = useState(false);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const debounce = (fn, delay) => {
    let id;

    const returnedFunc = (e) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        fn(e);
      }, delay);
    };

    return returnedFunc;
  };

  const handleUserName = async (e) => {
  

    const user = e.target.value;

    if (user == null || user.trim() === "") {
      // So that a API call with empty query is not called
      setUserName("");
      return;
    }
    const data = await fetch(BASE_URL + "/user/userExists/" + e.target.value);
    const userExists = await data.json();
    setUserExists(userExists);
    setUserName(e.target.value);
  };

  const debouncedHandleUserName = debounce(handleUserName, 500);

  const handleSignup = () => {
    
    if (firstName.current.value.length == 0) {
      setFirstNameExists(false);
      return;
    } else {
      setFirstNameExists(true);
    }
    if (lastName.current.value.length == 0) {
      setLastNameExists(false);
      return;
    } else {
      setLastNameExists(true);
    }
    const validatedEmail = emailValidation(email.current.value);
    if (validatedEmail != true) {
      setIsEmailValidated(false);
      return;
    } else {
      setIsEmailValidated(true);
    }

    if (userName.length == 0) {
      setUserNameErrorFlag(true);
      return;
    } else {
      setUserNameErrorFlag(false);
    }
    const validatedPassword = passwordValidation(password.current.value);
    if (validatedPassword != true) {
      setIsPasswordValidated(false);
      return;
    }
    
    if(!userExists)
      {

        signupUser();

      }

  };


  // const firstName = useRef(null);
  // const lastName = useRef(null);
  // const email = useRef(null);
  // const password = useRef(null);

  const signupUser = async ()=>{
    console.log("Signing in user")
    const URL = BASE_URL + "/user/save";
    const data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        username: userName,
            password: password.current.value,
            email: email.current.value,
            first_name: firstName.current.value,
            last_name: lastName.current.value}),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

 
    if(data.status==200)
      {
        
        toast.success('User Signed in successfully!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        
          });
        navigate("/");
      }

  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat font-balsamiq"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      <div className="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-4 sm:mx-auto rounded-lg shadow-md p-8 sm:p-10">
        <form className="font-balsamiq">
          <div className="mb-4">
            <label className="block mb-1 font-bold">First Name</label>
            <input
              ref={firstName}
              type="text"
              placeholder="Enter first name"
              className={`px-4 py-3 w-full text-sm outline-none rounded-lg ${
                firstNameExists
                  ? "border-blue-500 bg-blue-50"
                  : "border-red-500 bg-red-50"
              }`}
            />
            {!firstNameExists && (
              <p className="text-red-500 text-xs mt-1">
                Please enter your first name
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold">Last Name</label>
            <input
              ref={lastName}
              type="text"
              placeholder="Enter last name"
              className={`px-4 py-3 w-full text-sm outline-none rounded-lg ${
                lastNameExists
                  ? "border-blue-500 bg-blue-50"
                  : "border-red-500 bg-red-50"
              }`}
            />
            {!lastNameExists && (
              <p className="text-red-500 text-xs mt-1">
                Please enter your last name
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold">Email</label>
            <input
              type="email"
              ref={email}
              placeholder="Enter Email"
              className={`px-4 py-3 w-full text-sm outline-none rounded-lg ${
                isEmailValidated
                  ? "border-blue-500 bg-blue-50"
                  : "border-red-500 bg-red-50"
              }`}
            />
            {!isEmailValidated && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold">User Name</label>
            <input
              type="text"
              placeholder="User name"
              className={`px-4 py-3 w-full text-sm outline-none rounded-lg ${
                userName.length === 0
                  ? "border-blue-500 bg-blue-50"
                  : userExists
                  ? "border-red-500 bg-red-100"
                  : "border-green-600 bg-green-200"
              }`}
              onChange={debouncedHandleUserName}
            />
            {/* {userName.length !== 0 && (
              
                {userExists ? <p></p> : ""} 
              
            )} */}


          {/* {userName.length !==0 ? (userExists ? <p>User Not avaliable </p> : <p>User avaliable</p> : </>)}             */}


          {userName.length !=0 ? (userExists ? <p className="font-balsamiq text-red-500 text-xs mt-1">User Not avaliable </p> : 
          <p className="font-balsamiq text-green-700 text-xs  mt-1">User avaliable</p>) : <></>}
           
          </div>

          {userNameErrorFlag ? (
            <h1 className="font-balsamiq text-red-500 text-sm">
              {" "}
              Please enter user name{" "}
            </h1>
          ) : (
            <></>
          )}

          <div className="mb-4">
            <label className="block mb-1 font-bold">Password</label>
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className={`px-4 py-3 w-full text-sm outline-none rounded-lg ${
                isPasswordValidated
                  ? "border-blue-500 bg-blue-50"
                  : "border-red-500 bg-red-50"
              }`}
            />
            {!isPasswordValidated && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid password
              </p>
            )}
          </div>

          <button
            type="button"
            className="w-full px-4 py-2.5 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleSignup}
          >
            Sign up
          </button>
          <Link
            to={"/"}
            className="block mt-4 text-blue-800 hover:cursor-pointer"
          >
            Already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
