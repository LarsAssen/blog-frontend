import NavItemType from 'Models/NavItemType'
import Link from 'next/link'
import React from 'react'

const NavItem:React.FC<{item: NavItemType}> = ({item}) => {
  return (
    <React.Fragment key={item.title}>
        <Link href={item.link}><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-blue-800" >{item.title}</a></Link>
    </React.Fragment>
  )
}

export default NavItem