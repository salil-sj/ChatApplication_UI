import React, { useEffect, useState } from "react";
import ContactBox from "./ContactBox";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setCurrentRecipient, setProfileDetails, updateReadFlag, updateSideBarDetails } from "../store/userSlice";
import { BASE_URL } from "../utils/constants";
import { setMessages } from "../store/messageSlice";
import { shallowEqual } from 'react-redux';

const ChatContacts = () => {
  const dispatch = useDispatch();

  const [tokenData, setTokenData] = useState(null);
  const [userName, setUserName] = useState(null);
  

  const sidebarData = useSelector(store=>store.userData.sideBarDetails , shallowEqual)
  //const [sidebarData, setSideBarData] = useState(null);

  const messagesData = useSelector(store=>store.messageData.message)
 
  const handleContactCardClick = (uName, firstName, lastName) => {
  
    const currrentRecipientObj = {
      userName: uName,
      firstName: firstName,
      lastName: lastName,
    };
    dispatch(setCurrentRecipient(currrentRecipientObj));

    // Setting the read flag as true: as msg is being read
    dispatch(updateReadFlag(uName));
    // Getting message history for selecte card:
    getMessageHistoryForSelectedCard(userName, currrentRecipientObj.userName);

    // Setting readFlag as true in DB , as the chatbox for this user is opened:
    updateReadFlagInDB(uName , userName )  
  };

  const updateReadFlagInDB = async(senderUserName , receiverUserName)=>
  {
    const URL = BASE_URL + "/user/updateReadFlag";

    const body = {
      "senderUserName" : senderUserName,
      "receiverUserName" : receiverUserName
    }

    const result = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: tokenData,
      },
    });
  }

  const getMessageHistoryForSelectedCard = async (currentUser, userB) => {
    const URL = BASE_URL + "/user/messageHistory";
    const body = {
      userA: currentUser,
      userB: userB,
    };

    const data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: tokenData,
        "Content-Type": "application/json"
      },
      
    });

    const result = await data.json();

    // Check if there are existing messages in the slice:(other party has sen several message so those message should come at top of older messages)

    
   

    if(messagesData[userB]== null || messagesData[userB] == undefined) // No previous message send by other party:
      {
        result.forEach(data=>{
          dispatch(setMessages(
            {
              recipientUser : userB , 
              data : data
            }
          ))
        })
      } 
      else
      {
        var tempData = [...messagesData[userB]];
        tempData.reverse();

        result.forEach(data=>{
          dispatch(setMessages(
            {
              recipientUser : userB , 
              data : data
            }
          ))
        })
        

      }

    

    // dispatch(setMessages(
    //   {
    //     recipientUser : userB , 
    //     data : result
    //   }
    // ))

    {console.log("Result from clicking ..............")}
    console.log(result);
  };

  useEffect(() => {
    // fetching token from local storage
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");

    if (jwt && jwt !== "undefined" && user && user !== "undefined") {
      setTokenData(jwt);
      setUserName(user);
    } else {
      // navigate("/");
    }
  }, []);

  useEffect(() => {
    if (tokenData) getSideBarData();
  }, [tokenData]);

  const getSideBarData = async () => {
    const URL = BASE_URL + "/user/getRecentMessage";

    const result = await fetch(URL, {
      method: "POST",
      body: userName,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: tokenData,
      },
    });

    const data = await result.json();
    data.forEach((element) => {
      console.log("ELement:::")
      console.log(element)
      dispatch(updateSideBarDetails(element));
      dispatch(setProfileDetails(
        {
          userName: element.userName,
          firstName: element.firstName,
          lastName : element.lastName
        } 
      ));
    });
   // setSideBarData(data);
  };

  const chatContactsData = useSelector((store) => store.userData.sideBarDetais);

  return (
    <div
      className="w-[36%] bg-gray-100 max-h-screen overflow-y-auto "
      style={{
        scrollbarWidth: "thin",
      }}
    >
   
 
   {sidebarData && Object.keys(sidebarData).length > 0 ? ( // Check if sidebarData exists
      Object.entries(sidebarData).map(([key, value]) => {
        // Access data using key and value
        const userName = key;
        const { firstName, lastName, latestContent , createdAt , readFlag } = value; // Destructuring for clarity (optional)
        
        return (
          <div
            key={key} // Important for performance with dynamic lists
            onClick={() =>
              handleContactCardClick(userName, firstName, lastName)
            }
          >
         
            <ContactBox
              firstName={firstName}
              lastName={lastName}
              message={latestContent}
              time = {createdAt}
              readFlag={readFlag}
              // ... other message details from "otherData" if needed
            />
          </div>
        );
      })
    ) : (
      <div>Loading sidebar data...</div> // Display a loading message while data is fetched
    )}
  </div>
  );
};

export default ChatContacts;
