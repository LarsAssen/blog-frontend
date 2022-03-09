import React from 'react'

const CardSmall:React.FC<{children: any}> = ({children}) => {
  return (
    <div className="w-full lg:max-w-full lg:flex">
        <div className="max-w-sm rounded overflow-hidden border-2">
            {children}
        </div>
    </div>
  )
}

export default CardSmall