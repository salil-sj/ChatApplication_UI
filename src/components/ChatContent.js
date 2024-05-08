import React from 'react'
import ChatContacts from './ChatContacts'
import Chatbox from './Chatbox'

const ChatContent = () => {
  return (
    <div className='flex h-full'>
        <ChatContacts /> 
       <Chatbox /> 
    </div>
  )
}

export default ChatContent