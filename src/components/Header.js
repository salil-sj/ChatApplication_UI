import React from 'react';
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='bg-blue-950  flex justify-center'>
      <div className="relative w-[40%] m-2">
        <CiSearch className="text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
        <input type='text' className='p-1 pl-8 w-full rounded-lg' placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
