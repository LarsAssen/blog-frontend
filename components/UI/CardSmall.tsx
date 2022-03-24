import React from 'react'

const CardSmall:React.FC<{children: any}> = ({children}) => {
  return (
    <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {children}
          </div>
        </div>
    </div>
  )
}

export default CardSmall