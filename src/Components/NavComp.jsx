import React, { useState } from 'react';
import { FaCode } from "react-icons/fa";
import { RiDropdownList } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const NavComp = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='flex flex-row items-center justify-between p-10 sticky top-0 bg-indigo-800 z-50'>
                <div className='text-white text-3xl tracking-wider flex items-center'>
                    <span className='m-1'><FaCode /></span>
                    Rohit Sengupta
                </div>
                <div className='space-x-4'>
                    <div className='ssm:hidden lg:block'>
                        <a href='#about' className='text-white hover:text-indigo-500 px-5'>About</a>
                        <a href='#skills' className='text-white hover:text-indigo-500 px-5'>Skills</a>
                        <a href='#projects' className='text-white hover:text-indigo-500 px-5'>Projects</a>
                        <a href='#experience' className='text-white hover:text-indigo-500 px-5'>Experience</a>
                    </div>
                    <div className='ssm:block lg:hidden'>
                        {
                            toggle ?
                                <RxCross1 size={30} className='text-white text-3xl cursor-pointer' onClick={() => setToggle(false)} /> :
                                <RiDropdownList size={30} className='text-white text-3xl cursor-pointer' onClick={() => setToggle(true)} />
                        }
                    </div>
                </div>
            </div>
            {
                toggle ? (
                    <div className='px-10 bg-indigo-800 sticky top-20 z-50 lg:hidden'>
                        <ul className="list-none m-0 p-0">
                            <li className='text-white hover:text-indigo-500 cursor-pointer'><a href='#about' className='block py-2 px-4'>About</a></li>
                            <li className='text-white hover:text-indigo-500 cursor-pointer'><a href='#skills' className='block py-2 px-4'>Skills</a></li>
                            <li className='text-white hover:text-indigo-500 cursor-pointer'><a href='#projects' className='block py-2 px-4'>Projects</a></li>
                            <li className='text-white hover:text-indigo-500 cursor-pointer'><a href='#experience' className='block py-2 px-4'>Experience</a></li>
                        </ul>
                    </div>
                ) : null
            }
        </>
    );
}

export default NavComp;
