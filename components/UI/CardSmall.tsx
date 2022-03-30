import { motion } from 'framer-motion'
import React from 'react'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const CardSmall:React.FC<{children: any}> = ({children}) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={item} className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              {children}
          </div>
        </div>
    </motion.div>
  )
}

export default CardSmall