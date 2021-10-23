import React from 'react'

const Header: React.FC = () => {
    return (
    <div className="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
    <div className="absolute z-30 flex w-full h-full">
        <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
        <h2 className="text-5xl">The Running Explorer</h2>
        <span></span>
        </div>
        <div className="absolute top-0 right-0 flex w-full h-full">
        <div className="w-1/3 h-full bg-indigo-500"></div>
        <div className="relative w-1/3">
            <svg
            fill="currentColor"
            viewBox="0 0 100 100"
            className="absolute inset-y-0 z-20 h-full text-indigo-500"
            >
            <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
            <svg
            fill="currentColor"
            viewBox="0 0 100 100"
            className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
            >
            <polygon points="0,0 100,0 50,100 0,100"></polygon>
            </svg>
        </div>
        </div>
    </div>
    <div className="absolute top-0 right-0 block w-9/12 h-full">
        <img
        alt="Snowy mountain lake"
        className="object-cover min-w-full h-full"
        src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        />
    </div>
    </div>
    )
}

export default Header
