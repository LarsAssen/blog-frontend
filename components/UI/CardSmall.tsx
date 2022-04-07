import { motion } from 'framer-motion'
import React from 'react'

const CardSmall:React.FC<{children: any, variant:any, className:string}> = ({children, variant, className}) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={variant} className={`p-4 md:w-1/3 ${className}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {children}
          </div>
        </div>
    </motion.div>
  )
}

export default CardSmall