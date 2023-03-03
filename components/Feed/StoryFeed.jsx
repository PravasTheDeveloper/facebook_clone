import React from 'react'
import { BsFillBookFill, BsPlusLg } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";

function StoryFeed({name , profilePic , day}) {
    return (
        <>
            <div className='w-[114px] storyFeedwidth h-[204px] bg-white rounded-xl overflow-hidden sha mr-2'>
                <div className='w-full h-[100%] flex justify-center items-center relative'>
                    <img src={day} className='z-10' alt="" />
                    <div className='StoryFeedActons z-40'>
                    </div>
                    <div className='w-10 h-10 bg-blue-600 absolute z-40 rounded-full overflow-hidden p-1 top-2 left-2'>
                        <img src={profilePic} className='rounded-full' alt="" />
                    </div>
                    <div className='w-full h-7 ml-2 absolute z-50 overflow-hidden p-1 bottom-2 left-0 text-sm text-white'>
                        <p>Your Story</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryFeed