import CurrentlyWorkingOnList from '@/components/About/CurrentLife/CurrentlyWorkingOnList'
import CurrentlyWorkingOnTitle from '@/components/About/CurrentLife/CurrentlyWorkingOnTitle'
import React from 'react'

const CurrentLifePage:React.FC = () => {
    return (
        // <div className="container m-3">
        //     <h1 className="m-5">Current Life</h1>
        //     <div className="ml-5">
        //         <h3>What Im currently busy with</h3>
        //         <p className="w-64">Im currently living in Zwolle in the Netherlands, finishing up my Software engineering degree and
        //             doing an internship at Arcady. My time is currently spent doing:
        //         </p>
        //         <ul>
        //             <li>Being an awesome, supportive fiancé.</li>
        //             <li>Working at my internship project.</li>
        //             <li>Working out with the focus on another ultra marathon next year.</li>
        //             <li>Coding and designing this blog.</li>
        //         </ul>
        //     </div>
        //     <div className="ml-5 mt-5">
        //         <h3>My priorities are</h3>
        //         <ul>
        //             <li>Getting my software engineering degree.</li>
        //             <li>Training for my next race.</li>
        //             <li>Setting up this blog.</li>
        //             <li>Staying fit, healthy and happy.</li>
        //         </ul>
        //     </div>

        // </div>
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
