import React from 'react'

const TitleSmall:React.FC<{titleText:string}> = ({titleText}) => {
  return (
    <div className="w-full mb-6 lg:mb-0">
        <h1 className="text-lg font-bold title-font mb-2 text-gray-900">{titleText}</h1>
        <div className="h-1 w-20 bg-main-color rounded"></div>
  </div>
  )
}

export default TitleSmall