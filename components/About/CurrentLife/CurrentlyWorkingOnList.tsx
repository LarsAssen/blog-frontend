import React from 'react'
import CurrentlyWorkingOnItem from './CurrentlyWorkingOnItem'

const CurrentlyWorkingOnList = () => {
  return (
    <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Stuff Im working on</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        <div className="pt-4 flex flex-wrap -m-4">
            <CurrentlyWorkingOnItem title='Mozart Ultra' subtitle='Running' description="I'm currently training for the Mozart Ultra in June. A race of 78k with about 4000 meters of elevation." />
            <CurrentlyWorkingOnItem title='Renewing Blog' subtitle='Blog' description="I'm currently updating the blog into a more personal website, that fit's who I am. I'm trying out new things, and seeing what works best for me."/>
            <CurrentlyWorkingOnItem title='Wedding planning' subtitle='Personal' description="This year, we are getting married. We're very excited about it, and I cannot wait to marry the girl of my dreams."/>
            <CurrentlyWorkingOnItem title='Full stack web developer' subtitle='Work' description="I've started working as a full stack web developer at Arcady. I'm learning a whole lot of new things, I hope to get much better at creating and building web apps."/>
        </div>
    </div>
  )
}

export default CurrentlyWorkingOnList