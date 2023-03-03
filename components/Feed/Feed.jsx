import React, { useRef } from 'react'
import { BsFillBookFill, BsPlusLg, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import StatusUplaod from './StatusUplaod';
import StoryFeed from './StoryFeed';
import UplaodStatus from './UplaodStatus';
import Data from '../../Data';

function Feed() {

    const handleClickScroll = () => {
        const element = document.getElementById('StoryFeed');
        element.scrollLeft = element.scrollLeft + 114;
    };

    const handleClickScrollLeft = () => {
        const element = document.getElementById('StoryFeed');
        element.scrollLeft = element.scrollLeft - 114;
    };

    

    return (
        <>
            <div className='md:w-5/12 w-full mt-0 mx-4 md:mx-0 overflow-hidden'>

                {/* Feed Story And Rell */}

                <div className='bg-white w-full rounded-lg overflow-hidden sha'>
                    <div className='h-[60px] flex border-b border-slate-300'>
                        <div className='w-1/2 flex justify-center items-center border-b-4 border-blue-600 text-blue-600' >
                            <BsFillBookFill className='text-xl mr-4' /><span className='text-md font-semibold'>Stories</span>
                        </div>
                        <div className='w-1/2 flex justify-center items-center text-slate-700'>
                            <RiVideoFill className='text-2xl mr-4' /><span className='text-md font-semibold'>Reels</span>
                        </div>
                    </div>
                    {/* Story Feed */}
                    <div className='relative'>
                        <div className='p-5 flex overflow-x-auto storyFeed duration-500 ' id='StoryFeed' >
                            {/* Create Story Feed */}
                            <div className='w-[114px] storyFeedwidth h-[204px] bg-white rounded-xl overflow-hidden sha mr-2'>
                                <div className='w-full h-[70%]'>
                                    <img src="Profile/StoryImage.jpg" alt="" />
                                </div>
                                <div className='w-full h-[10%] relative flex justify-center'>
                                    <div className='bg-white w-10 h-10 flex justify-center items-center rounded-full z-20 absolute bottom-[-3px]'>
                                        <div className='bg-blue-600 w-8 h-8 flex justify-center items-center rounded-full'>
                                            <BsPlusLg className='text-xl text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[20%] w-full flex justify-center items-center'>
                                    <p className='text-sm font-semibold'>Create Story</p>
                                </div>
                            </div>

                            {/* Public Story Feed */}
                            {Data.map((dta) => {
                               return( !dta.day ? null : <StoryFeed name={dta.name} profilePic={dta.profilePic} day={dta.day} /> );
                            })}
                        </div>
                        <div className='right-0 z-40 top-[40%] absolute'>
                            <button onClick={handleClickScroll} className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full left-0" ><BsChevronRight className='text-3xl' /></button>
                        </div>
                        <div className='left-0 z-40 top-[40%] absolute'>
                            <button onClick={handleClickScrollLeft} className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full left-0" ><BsChevronLeft className='text-3xl' /></button>
                        </div>
                    </div>
                </div>

                {/* Status Upload Bar Section */}
                <StatusUplaod />
                <div className='w-full'>
                   {Data.map((data,idx)=>{
                        return(<UplaodStatus name={data.name} profilePic={data.profilePic} discription={data.discription} uploadImg={data.image} />)
                   })}
                </div>

            </div>

        </>
    )
}

export default Feed

// "id":3,
//         "name":"Elon Musk",
//         "discription":"Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX",
//         "profilePic":"/Upload/ElonMusk.jpg",
//         "image":"/Upload/ElonMusk2.jpg",
//         "date":"03-03-2023",