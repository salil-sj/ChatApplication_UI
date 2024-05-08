import React from 'react'
import ContactBox from './ContactBox'

const ChatContacts = () => {
  return (
    <div className='w-[24%] bg-blue-50 h-screen overflow-y-auto ' style={{
        scrollbarWidth: 'thin',
    }}>
    
    <ContactBox name="Salil Joshi" message="Hey bro? How u doing"/>
    <ContactBox name="Vidya Balan" message="lorem ipsum this "/>
    <ContactBox name="Angrej Singh" message="Reaact is used  "/>
    <ContactBox name="Rj kumar kundra" message="Hey i am raj"/>
    <ContactBox name="Disha Pant" message="didiiiiiiiiii"/>
    <ContactBox name="Angrej Singh" message="lorem ipsum "/>
    <ContactBox name="Rj kumar kundra"/>
    <ContactBox name="Diksha Pant"/>
    <ContactBox name="Salil Joshi" message="lorem ipsum this "/>
    <ContactBox name="Vidya Balan"/>
    <ContactBox name="Angrej Singh" message="lorem ipsum this t"/>
    <ContactBox name="Rj kumar kundra"/>
    <ContactBox name="Diksha Pant"/>
    <ContactBox name="Angrej Singh"/>
    <ContactBox name="Rj kumar kundra"/>
    <ContactBox name="Diksha Pant"/>

</div>
  )
}

export default ChatContacts