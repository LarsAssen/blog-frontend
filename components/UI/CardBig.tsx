import React from 'react'

const CardBig:React.FC<{children: any}> = ({children}) => {
  return (
    <div className='py-8 flex flex-wrap md:flex-nowrap'>
        {children}
    </div>
  )
}

export default CardBig