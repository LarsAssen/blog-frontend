import React from 'react'
import CurrentlyWorkingOnItem from './CurrentlyWorkingOnItem'

const CurrentlyWorkingOnList = () => {

  const currentlyWorkingOnItems = ["Training for the Mozart Ultra 75k", "Planning my wedding in September this year with my fiancee.", "My current job at Arcady.", "Making this blog more beautiful."]
  const prioritiesItems = ["Staying in great shape by working out and running", "Planning a wedding", "Getting my daily habits done", "Spending time with my family and friends"]

  return (
    <div>
        <div className="pt-4 flex flex-wrap justify-between">
            <CurrentlyWorkingOnItem title="What I'm currently working on." description="All the stuff I'm currently busy with." items={currentlyWorkingOnItems} />
            <CurrentlyWorkingOnItem title="What my priorities are." description="What things are most important to me right now during the day." items={prioritiesItems} />
        </div>
    </div>
  )
}

export default CurrentlyWorkingOnList