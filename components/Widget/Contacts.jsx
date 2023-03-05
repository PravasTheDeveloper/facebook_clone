import Image from 'next/image'
import React from 'react'

function Contacts({name , pic}) {
  return (
    <>
        <div className='mt-5 flex items-center'>
            <div className='w-7 h-7 rounded-full mr-4'>
                <Image src={pic} width={100} height={100} alt="" className='rounded-full' />
            </div>
            <div className='font-semibold'>
                <p>{name}</p>
            </div>
        </div>
    </>
  )
}

export default Contacts