import React from 'react'

const TitleBig:React.FC<{titleText:string, variant: string | null}> = ({titleText, variant="normal"}) => {

  if(variant === "normal"){
    return (
    <div className="w-full mb-6 lg:mb-0">
      <h1 className="text-lg font-bold title-font mb-2 text-gray-900">{titleText}</h1>
      <div className="h-1 w-20 bg-main-color rounded"></div>
    </div>
    )
  }

  if(variant === "large"){
  return (
    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">{titleText}</h1>
    <div className="h-1 w-20 bg-main-color rounded"></div>
  </div>
  )
  }

  return (
    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">{titleText}</h1>
    <div className="h-1 w-20 bg-main-color rounded"></div>
  </div>
  )
}

export default TitleBig