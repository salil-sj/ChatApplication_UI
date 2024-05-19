import React from 'react'
import ContactBox from './ContactBox'
import { useSelector } from 'react-redux'

const ChatContacts = () => {

  const chatContactsData = useSelector(store=>store.userData.sideBarDetais)

  return (
    <div className='w-[26%] bg-gray-100 h-screen overflow-y-auto ' style={{
        scrollbarWidth: 'thin',
    }}>

      {
        chatContactsData?.map((data)=>{
          return(
            <ContactBox name= {data?.userName} message={data?.latestContent} time={data?.createdAt}/>
          )
        })
      }

    
    
    

</div>
  )
}

export default ChatContacts