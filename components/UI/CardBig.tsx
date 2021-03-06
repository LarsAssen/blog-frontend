import React from 'react'

const CardBig:React.FC<{children: any}> = ({children}) => {
  return (
    <div className='my-3 h-80 flex border rounded-lg overflow-hidden shadow-lg flex-wrap md:flex-nowrap'>
        {children}
    </div>
  )
}

export default CardBig