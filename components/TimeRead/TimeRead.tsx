import React from 'react'

const TimeRead:React.FC<{timeToRead:number}> = ({timeToRead}) => {
  return (
    <span className="text-sm md:text-base float-right font-normal text-gray-600">{timeToRead} minute read</span>
  )
}

export default TimeRead