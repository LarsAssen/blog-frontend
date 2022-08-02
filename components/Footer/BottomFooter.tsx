import React from 'react'
import FooterSocials from './FooterSocials'

const BottomFooter:React.FC = () => {
  return (
    <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <span className="ml-3 text-xl">The Running explorer</span>
          <FooterSocials />
        </div>
    </div>
  )
}

export default BottomFooter