import Image from 'next/image'
import React from 'react'
import { BiWorld , BiLike, BiComment } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";



function UplaodStatus({name , profilePic , discription , uploadImg}) {
    return (
        <>
            <div className='bg-white sha w-full mt-5 rounded-lg overflow-hidden'>
                <div className='w-full h-[70px] px-5 flex items-center justify-between'>
                    <div className='flex'>
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <Image src={profilePic} width={100} height={100} alt="" />
                        </div>
                        <div className='ml-5 text-[16px]'>
                            <p>{name}</p>
                            <div className='flex items-center text-slate-600'>
                                <p>14h .</p>
                                <p><BiWorld /></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex text-2xl text-slate-600'>
                        <BsThreeDots className='mr-5'/>
                        <RxCross2 />
                    </div>
                </div>
                <div className='p-4'>
                    <p>{discription}</p>
                </div>
                <div className='w-full h-[75%] flex justify-center items-center'>
                    <img src={uploadImg} className='w-full h-auto' alt="" />
                </div>
                <div className='w-full  flex justify-between text-2xl p-5 text-slate-600'>
                    <div className='hover:bg-slate-200 cursor-pointer w-full mx-2 flex justify-center py-2 rounded-lg'>
                        <BiLike /> <p className='text-base ml-2'>Like</p>
                    </div>
                    <div className='hover:bg-slate-200 cursor-pointer w-full mx-2 flex justify-center  py-2 rounded-lg'>
                        <BiComment />  <p className='text-base ml-2'>Comment</p>
                    </div>
                    <div className='hover:bg-slate-200 cursor-pointer w-full mx-2 flex justify-center  py-2 rounded-lg'>
                        <RiShareForwardLine />  <p className='text-base ml-2'>Share</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UplaodStatus