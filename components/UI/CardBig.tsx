import React from 'react'

const CardBig:React.FC<{children: any}> = ({children}) => {
  return (
    <div className='py-8 my-3 bg-white flex border rounded-lg shadow-lg flex-wrap md:flex-nowrap'>
        {children}
    </div>
  )
}

export default CardBig