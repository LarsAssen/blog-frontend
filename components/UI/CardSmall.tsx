import React from 'react'

const CardSmall:React.FC<{children: any}> = ({children}) => {
  return (
    <div className="w-full lg:max-w-full lg:flex">
        <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
            {children}
        </div>
    </div>
  )
}

export default CardSmall