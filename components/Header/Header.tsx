import React from 'react'
import SubscribeBox from '../EmailSubscription/SubscribeBox'

const Header: React.FC = () => {
    return (
        <div className='bg-cover flex h-screen text-center justify-center bg-hero-pattern'>
            <div className='text-white mt-20 w-8/12'>
                <h1 className='text-white text-left text-4xl lg:text-7xl'>The Running Explorer</h1>
                <p className='text-left text-2xl'>
                    All about trail running, travel motivation and books. 
                    To stay up to date, subscribe to the newsletter for
                    weekly updates.
                </p>
                <div className='text-left'>
                <SubscribeBox />
                </div>
            </div>
        </div>
        )
}

export default Header
