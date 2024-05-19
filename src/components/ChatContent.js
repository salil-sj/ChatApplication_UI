import React from 'react'
import ChatContacts from './ChatContacts'
import Chatbox from './Chatbox'

const ChatContent = () => {
  return (
    <div>
    <div className='flex'>
        <ChatContacts />  
       <Chatbox /> 
    </div>
    
    </div>
  )
}

export default ChatContent