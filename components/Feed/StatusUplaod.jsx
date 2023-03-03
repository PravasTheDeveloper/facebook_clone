import React from 'react'
import { RiLiveFill } from 'react-icons/ri'
import { IoMdPhotos } from 'react-icons/io'
import { MdMood } from 'react-icons/md'

function StatusUplaod() {
    return (
        <>
            <div className='w-full bg-white mt-5 sha rounded-lg p-5'>
                <div className='flex border-b border-slate-300 pb-2'>
                    <div className='w-12 h-12 overflow-hidden rounded-full'>
                        <img src="/profilepicOne.png" alt="" className='w-full h-full' />
                    </div>
                    <div className='flex-1 pl-5 flex justify-center items-center'>
                        <input type="text" className='bg-slate-200 w-full h-10 rounded-full px-5 outline-none' placeholder='What on your mind ?' />
                    </div>
                </div>
                <div className='flex justify-between mt-3'>
                    <div className='h-12 w-40 hover:bg-slate-200 cursor-pointer flex justify-center rounded-lg'>
                        <div className='h-full flex items-center'>
                            <RiLiveFill className='text-3xl text-red-500 mr-2' /> <span>Live Video</span>
                        </div>
                    </div>
                    <div className='h-12 w-40 hover:bg-slate-200 cursor-pointer flex justify-center rounded-lg'>
                        <div className='h-full flex items-center'>
                            <IoMdPhotos className='text-3xl text-green-500 mr-2' /><span>Photo/Videos</span>
                        </div>
                        
                    </div>
                    <div className='h-12 w-40 hover:bg-slate-200 cursor-pointer flex justify-center items-center rounded-lg'>
                    <div className='h-full flex items-center'>
                            <MdMood className='text-3xl text-yellow-500 mr-2' /><span>Feeling/activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusUplaod