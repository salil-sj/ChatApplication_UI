import React from 'react'
import SearchBarContent from './SearchBarContent'
import { useSelector } from 'react-redux'

const SearchBar = ({userData}) => {

    
  
  return (
    <div className='bg-gray-200 absolute top-full left-0 w-full z-10 mt-1 rounded-lg max-h-screen overflow-y-auto'>
      {userData?.map((data)=>{
        return(
          <SearchBarContent userData = {data}/>
        )
      })}      
      
    </div>
  )
}

export default 
SearchBar