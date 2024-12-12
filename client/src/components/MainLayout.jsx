import React from 'react'
import Navbar from './Navbar'

export const MainLayout = ({children}) => {
    return (
        <div className='w-[100%]  '>
            <Navbar />
            { 
                children
            }
        </div>
    )
}
