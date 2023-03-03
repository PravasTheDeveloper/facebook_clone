import Image from 'next/image'
import React from 'react'
import { AiFillPushpin, AiOutlineHome, AiOutlineShop } from 'react-icons/ai'
import { MdOndemandVideo, MdOutlineOndemandVideo } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { TbGridDots } from 'react-icons/tb'
import { HiUserGroup } from 'react-icons/hi'



function Slider() {
    return (
        <>
            <div className='h-[94vh] w-4/12 pt-3 hidden md:block'>
                <div className='h-full w-4/12 fixed'>
                    <div className='w-1/2 border-b border-b-slate-300 py-2'>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <AiOutlineHome className='text-2xl text-slate-600 mr-5' /><span className='font-semibold'>Home</span>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-full mr-5 overflow-hidden hidden md:block'>
                                <Image src="/profilepicOne.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                Mithun Sarkar
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 border-b border-b-slate-300 py-2'>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <MdOutlineOndemandVideo className='text-2xl text-slate-600 mr-5' /><span className='font-semibold'>Watch</span>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <AiOutlineShop className='text-2xl text-slate-600 mr-5' /><span className='font-semibold'>Market Place</span>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <CgGames className='text-2xl text-slate-600 mr-5' /><span className='font-semibold'>Gaming</span>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <TbGridDots className='text-2xl text-slate-600 mr-5 bg-slate-200 p-1 rounded-full' /><span className='font-semibold'>See All</span>
                        </div>
                    </div>

                    {/* Groups */}

                    <div className='w-1/2 border-b border-b-slate-300 py-2'>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-md mr-5 overflow-hidden hidden md:block'>
                                <Image src="/Group Photos/React_Group.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                React Comunity
                            </div>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-md mr-5 overflow-hidden hidden md:block'>
                                <Image src="/Group Photos/Tailwind_Group.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                Tailwind Comunity
                            </div>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-md mr-5 overflow-hidden hidden md:block'>
                                <Image src="/Group Photos/TourWorld.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                Tour World
                            </div>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <HiUserGroup className='text-2xl text-slate-600 mr-5 bg-slate-200 p-1 rounded-full' /><span className='font-semibold'>See All Groups</span>
                        </div>
                    </div>
                    <div className='w-1/2  py-2'>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-md mr-5 overflow-hidden hidden md:block'>
                                <Image src="/Group Photos/pubg.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                Pubg Mobile and Emulator
                            </div>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <div className='h-6 w-6 rounded-md mr-5 overflow-hidden hidden md:block'>
                                <Image src="/Group Photos/TourWorld.png" width={100} height={100} alt="" />
                            </div>
                            <div className='font-semibold'>
                                Tour World Visit
                            </div>
                        </div>
                        <div className='flex h-12 justify-start items-center cursor-pointer hover:bg-slate-200 pl-5 ml-1 rounded'>
                            <AiFillPushpin className='text-2xl text-slate-600 mr-5 bg-slate-200 p-1 rounded-full' /><span className='font-semibold'>See All Shortcuts</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider
