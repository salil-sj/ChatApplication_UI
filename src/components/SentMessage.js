import React from 'react'

const SentMessage = ({content}) => {
  return (
    <div>
         <div className="flex items-center justify-end mb-2 mr-2">
        <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-[60%]">
          {" "}
         
          <p className="text-sm">
            {content}
          </p>
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full ml-2">
          {/* Profile Picture Placeholder */}
        </div>
    </div>
    </div>
  )
}

export default SentMessage