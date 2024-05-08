import React from 'react'
import SideBar from './SideBar'
import ChatContacts from './ChatContacts'
import Header from './Header'
import Chatbox from './Chatbox'
import ChatBoxHeader from './ChatBoxHeader'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <SideBar/> 
       
        <ChatContacts /> 
      
          
        <Chatbox /> 
        
     
        
        </div>
    </div>
  )
}

export default Home