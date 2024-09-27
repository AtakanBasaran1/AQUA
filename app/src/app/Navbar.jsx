import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { TbStackBack } from "react-icons/tb";
import { FiBookmark } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
    return (
        <div id='navbar' className='fixed bottom-0 text-center w-full z-50 bg-custom-blue rounded-t-[50px] h-[60px] text-[16px] p-4'>
            <div className='flex text-center justify-center gap-5 mt-[3px]'>
                <GoHomeFill onClick={() => window.location.href = '/'} className='text-[26px] cursor-pointer text-gray-500 hover:text-white mt-[1px] ' />
                <TbStackBack className='text-[29px] mt-[-1px] cursor-pointer text-gray-500 hover:text-white ' />
                <FiBookmark className='text-[24px] cursor-pointer text-gray-500 hover:text-white mt-[1px] ' />
                <IoPerson className='text-[24px] cursor-pointer text-gray-500 hover:text-white mt-[1px]' />
            </div>
        </div>
    )
}

export default Navbar;
