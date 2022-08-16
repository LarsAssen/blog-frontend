import Size from 'Models/Enums/Size'
import React from 'react'

const Title:React.FC<{text: string, size: Size}> = ({text, size}) => {
    if(size === Size.Medium){
        return (
        <div className="w-full mb-6 lg:mb-0">
          <h1 className="text-lg font-bold title-font mb-2 text-gray-900">{text}</h1>
          <div className="h-1 w-20 bg-main-color rounded"></div>
        </div>
        )
      }
    
      if(size === Size.Large){
      return (
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">{text}</h1>
        <div className="h-1 w-20 bg-main-color rounded"></div>
      </div>
      )
      }
    
      return (
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">{text}</h1>
        <div className="h-1 w-20 bg-main-color rounded"></div>
      </div>
      )
}

export default Title