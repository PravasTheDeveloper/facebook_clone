import Image from 'next/image'
import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsFillBellFill, BsMessenger , BsPlusLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import LowerHeader from './LowerHeader';


function Header() {
    return (
        <>
            <div className='h-1/2 md:h-full w-full flex justify-between px-5 bg-white md:shadow-md'>
                {/* Header Left */}
                <div className='w-4/12 h-full flex items-center'>
                    <div className='w-[120px]'>
                        <img src="/Facebook_f_logo.png" width={1000} height={1000} alt="" />
                    </div>
                </div>

                {/* Header Center */}
                <div className='w-5/12 h-full hidden md:block'>
                    <div className='w-full h-full py-2 flex justify-center items-center relative'>
                        <input type="text" className='w-full h-full bg-slate-200 rounded-full outline-none px-10 text-slate-600 placeholder-gray-800::placeholder' placeholder='Search Facebook' />
                        <BiSearch className='text-xl absolute left-2 text-slate-600' />
                    </div>
                </div>
                {/* Header Right */}
                <div className='w-4/12 h-full flex items-center justify-end' >
                    <div className='flex text-xl'>
                        < BsPlusLg className='w-10 h-10 rounded-full p-2 md:p-3 md:hidden font-bold bg-slate-200 ml-3' />
                        < FaSearch className='w-10 h-10 rounded-full p-2 md:p-3 md:hidden font-bold bg-slate-200 ml-3' />
                        < BsMessenger className='w-10 h-10 rounded-full p-2 md:p-3 bg-slate-200 ml-3' />
                        < BsFillBellFill className='w-10 h-10 rounded-full ml-3 p-3 bg-slate-200 hidden md:block' />
                        <div className='h-10 w-10 rounded-full ml-3 overflow-hidden hidden md:block'>
                            <Image src="/profilepicOne.png" width={100} height={100} alt="" />
                            <IoIosArrowDown className='text-sm absolute z-50 bg-slate-200 rounded-full top-8 right-4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header