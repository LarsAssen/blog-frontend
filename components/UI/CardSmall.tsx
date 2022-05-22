import { motion } from 'framer-motion'
import React from 'react'

const CardSmall:React.FC<{children: any, variant:any, className:string}> = ({children, variant, className}) => {
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

export default CardSmall