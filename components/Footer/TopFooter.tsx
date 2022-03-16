import React from 'react'
import FooterCategories from './FooterCategories'
import FooterSubscribeBox from './FooterSubscribeBox'

const TopFooter = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <FooterCategories />
          <FooterSubscribeBox />
        </div>
      </div>
  )
}

export default TopFooter