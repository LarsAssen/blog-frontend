import CurrentlyWorkingOnList from '@/components/About/CurrentLife/CurrentlyWorkingOnList'
import CurrentlyWorkingOnTitle from '@/components/About/CurrentLife/CurrentlyWorkingOnTitle'
import React from 'react'

const CurrentLifePage:React.FC = () => {
    return (
        <div className='text-gray-600 body-font'>
            <div className="container px-5 py-24 mx-auto">
                <CurrentlyWorkingOnTitle />
                <CurrentlyWorkingOnList />
            </div>
        <div className="text-center pb-5">
            <h2>Last updated on 13 April 2022</h2>
        </div>
        </div>
    )
}

export default CurrentLifePage
