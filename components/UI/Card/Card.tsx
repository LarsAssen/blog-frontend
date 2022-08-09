import { motion } from 'framer-motion'
import Size from 'Models/Enums/Size'
import React from 'react'

const Card:React.FC<{children: any, size:Size, className:string, variant: any}> = ({children, size, className, variant}) => {
  
  if(size === Size.Medium) {
  return (
    <motion.div initial="hidden" animate="visible" variants={variant} className={`p-4 ${className}`}>
        <div className="h-full shadow-lg rounded-3xl overflow-hidden">
          <div className="h-full overflow-hidden">
              {children}
          </div>
        </div>
    </motion.div>
  )
  }
  
  
  if(size === Size.Large) {
    return (
      <div className='my-3 h-80 flex border rounded-lg overflow-hidden shadow-lg flex-wrap md:flex-nowrap'>
        {children}
      </div>
    )
  }

  return (
    <div className='my-3 h-80 flex border rounded-lg overflow-hidden shadow-lg flex-wrap md:flex-nowrap'>
      {children}
    </div>
  )

}

export default Card