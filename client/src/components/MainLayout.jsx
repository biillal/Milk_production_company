import React from 'react'
import Navbar from './Navbar'

export const MainLayout = ({children}) => {
    return (
        <div className='w-[100%] m-0 p-0 '>
            <Navbar />
            { 
                children
            }
        </div>
    )
}
