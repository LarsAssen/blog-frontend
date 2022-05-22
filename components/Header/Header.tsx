import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='text bg-cover flex h-screen text-center justify-center bg-hero-pattern'>
            <div className='text-white mt-20'>
                <h1 className='text-white text-left text-4xl lg:text-7xl'>The Running Explorer</h1>
                <p className='text-left text-2xl'>Running, ideas and fun.</p>
            </div>
        </div>
        )
}

export default Header
