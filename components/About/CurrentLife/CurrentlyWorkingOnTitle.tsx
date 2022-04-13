import React from 'react'

const CurrentlyWorkingOnTitle = () => {
  return (
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My current life</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="p-0 lg:w-1/2 w-full leading-relaxed text-gray-500">At the moment, I'm working as a full stack web developer at Arcady. In my free time, I'm working on this blog, running, and meditating. I'm going to run the Mozart Ultra in June and marry in September.</p>
    </div>
  )
}

export default CurrentlyWorkingOnTitle