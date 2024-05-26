import React from 'react'

const RecievedMessage = ({userName, content , time}) => {
  return (
    <div>
        <h1 className="ml-14 text-xs "> {userName} - 11:00 AM</h1>
      <div className="flex items-center mb-2 ml-2">
        
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2">
          {/* Profile Picture Placeholder */}
        </div>
        <div className="bg-gray-100  rounded-lg px-4 py-2 max-w-[60%]">
          {" "}
         
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default RecievedMessage