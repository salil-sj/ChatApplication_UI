import React, { useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SearchBar from './SearchBar';
import { BASE_URL } from '../utils/constants';

const Header = () => {


const [queryData , setQueryData] = useState([])

  const handleSearch = (e)=>{
    if(e.target.value.length ==0)
      {
        setQueryData([]);
        return;
      }
   
    fetchData(e.target.value).then().catch((e)=>console.log("Error is " + e))
  }

  const fetchData = async (query)=>{
    const URL = BASE_URL+"/user/userResults"
    const jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmMxMjMiLCJpc3MiOiJDSEFUQVBQTElDQVRJT04iLCJleHAiOjE5NzE2MDI1OTM4LCJpYXQiOjE3MTYwMjU5Mzh9.B9wBCC73FOM3mwiJJLKqjmkZDgLPSz-6QWT7cTl2V2o"; // Replace this with your actual JWT token

    const data = await fetch(URL, {
      method: "POST",
      body: query,
      headers: {
        "Authorization" : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmMxMjMiLCJpc3MiOiJDSEFUQVBQTElDQVRJT04iLCJleHAiOjE5NzE2MDI1OTM4LCJpYXQiOjE3MTYwMjU5Mzh9.B9wBCC73FOM3mwiJJLKqjmkZDgLPSz-6QWT7cTl2V2o"

      },
     
    });

    const result = await data.json();
    setQueryData(result)
  }

  const debounce = (fn , delay)=>{
    let timeoutId;
    function returnedDebouncedFunc(e)
    {
      if(timeoutId)
        {
          clearTimeout(timeoutId);
        }
        timeoutId =  setTimeout(()=>{
            fn(e);
        } , delay)
    }

    return returnedDebouncedFunc;
  }

  const debouncedHandleSearch = debounce(handleSearch , 300  );

  return (
    <div className='bg-blue-950  flex justify-center w-full'>
      <div className="relative w-[40%] m-2">
        <CiSearch className="text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
        <input type='text' className='p-1 pl-8 w-full rounded-lg' placeholder="Search" onChange={debouncedHandleSearch} />
        <SearchBar userData = {queryData}/>
      </div>
      
    </div>
  );
};

export default Header;
