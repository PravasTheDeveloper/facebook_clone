import React from 'react'
import Data from '../../Data'
import Contacts from './Contacts'

function Widget() {
    return (
        <>
            <div className='h-[94vh] w-4/12 hidden pt-3 overflow-hidden md:block' >
                <div className='w-4/12 h-full fixed'>
                    <div className='w-full h-full flex justify-end'>
                        <div className='w-2/3 h-full'>
                            <h1 className='font-bold text-lg'>
                                Contact 
                            </h1>
                            <div className=''>
                                {Data.map((dta , ind) =>{
                                   return !dta.day ?null: <Contacts name={dta.name} pic={dta.profilePic} />
                                })}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget