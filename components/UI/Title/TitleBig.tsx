import React from 'react'

const TitleBig:React.FC<{titleText:string}> = ({titleText}) => {
  return (
    <div className='w-1/5 mb-5'>
        <h1 className='text-black font-bold'>{titleText}</h1>
        <div className='d inline-block w-1/2 border-b-4 border-solid border-main-color'></div>
    </div>
  )
}

export default TitleBig