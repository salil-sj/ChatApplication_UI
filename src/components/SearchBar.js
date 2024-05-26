import React from 'react'
import SearchBarContent from './SearchBarContent'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRecipient, updateSideBarDetails, updateSideBarForSearchBarEvent } from '../store/userSlice';
import { setMessages } from '../store/messageSlice';
import { BASE_URL } from '../utils/constants';
import Cookies from "js-cookie";

const SearchBar = ({userData}) => {


  const dispatch = useDispatch();
  const messagesData = useSelector(store=>store.messageData.message)
  const selfUserName = useSelector(store=>store.userData.userName)

  const handleSearchBarClick = (data)=>{
    console.log("CLICK EVENT............")
    console.log(data);
    // UPDATE sidebardata:
    var sideBarData = {
        firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
    }

    dispatch(updateSideBarForSearchBarEvent(sideBarData));
    dispatch(setCurrentRecipient(sideBarData));
    getMessageHistoryForSelectedCard(selfUserName, data.userName);
  }

  const getMessageHistoryForSelectedCard = async (currentUser, userB) => {
    const URL = BASE_URL + "/user/messageHistory";
    const body = {
      userA: currentUser,
      userB: userB,
    };
    const jwt = Cookies.get("jwtToken");
    const user = Cookies.get("username");

    const data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: jwt,
        "Content-Type": "application/json"
      },
      
    });

    const result = await data.json();

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

  }
  
  return (
    <div className='bg-gray-200 absolute top-full left-0 w-full z-10 mt-1 rounded-lg max-h-screen overflow-y-auto'>
       {userData?.map((data)=>{
        return(
          <div   onClick = {()=>handleSearchBarClick(data)}>
          <SearchBarContent userData = {data}
         
          />
          </div>
        )
      })}      
      
    </div>
  )
}

export default SearchBar