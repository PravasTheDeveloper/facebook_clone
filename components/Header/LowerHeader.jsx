import React from 'react'
import { AiOutlineHome, AiFillHome, AiOutlineShop, AiFillShop } from "react-icons/ai";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegBell, FaBell } from "react-icons/fa";
import Image from 'next/image';


function LowerHeader() {
    return (
        <>
            <div className='h-1/2 w-full flex justify-between b-cyan-600 shadow-md bg-white md:hidden' >
                <div className='w-full h-full flex'>
                    <div className='w-full h-full mx-1 flex items-center justify-center'>
                        <div className='w-auto h-8'>
                            <AiOutlineHome className='w-full h-full text-slate-600' />
                        </div>
                        <div className='w-auto h-8 hidden'>
                            <AiFillHome className='w-full h-full text-blue-500' />
                        </div>
                    </div>
                    <div className='w-full h-full mx-1 flex items-center justify-center'>
                        <div className='w-auto h-8'>
                            <IoPeopleOutline className='w-full h-full text-slate-600' />
                        </div>
                        <div className='w-auto h-8 hidden'>
                            <IoPeopleSharp className='w-full h-full text-blue-500' />
                        </div>
                    </div>
                    <div className='w-full h-full mx-1 flex items-center justify-center'>
                        <div className='w-auto h-8'>
                            <MdOndemandVideo className='w-full h-full text-slate-600' />
                        </div>
                        <div className='w-auto h-8 hidden'>
                            <MdOndemandVideo className='w-full h-full text-blue-500' />
                        </div>
                    </div>
                    <div className='w-full h-full mx-1 flex items-center justify-center'>
                        <div className='w-auto h-8'>
                            <AiOutlineShop className='w-full h-full text-slate-600' />
                        </div>
                        <div className='w-auto h-8 hidden'>
                            <AiFillShop className='w-full h-full text-blue-500' />
                        </div>
                    </div>
                    <div className='w-full h-full mx-1 flex items-center justify-center'>
                        <div className='w-auto h-7'>
                            <FaRegBell className='w-full h-full text-slate-600' />
                        </div>
                        <div className='w-auto h-8 hidden'>
                            <FaBell className='w-full h-full text-blue-500' />
                        </div>
                    </div>
                    <div className='w-full h-full mx-1 flex justify-center items-center'>
                        <div className='w-10 rounded-full overflow-hidden h-10 '>
                            <Image src="/profilepicOne.png" width={100} height={100} alt="" />
                            {/* <IoIosArrowDown className='text-sm absolute z-50 bg-slate-200 rounded-full top-8 right-4' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LowerHeader