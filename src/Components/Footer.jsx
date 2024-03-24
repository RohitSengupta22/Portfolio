import React from 'react';
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className='bg-indigo-800 flex items-center justify-center'>
      <div>
        <h2 className='text-white text-2xl'>Made By Rohit with</h2>
      </div>
      <div className='text-white text-2xl ml-2'>
        <FcLike />
      </div>
    </div>
  );
}

export default Footer;
