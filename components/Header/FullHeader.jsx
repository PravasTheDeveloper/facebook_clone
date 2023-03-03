import React from 'react'
import Header from './Header'
import LowerHeader from './LowerHeader'

function FullHeader() {
    return (
        <>
            <div className='h-[140px] w-full fixed bg-red-800 md:h-[55px] z-50'>
                <Header />
                <LowerHeader />
            </div>
        </>
    )
}

export default FullHeader