import NavItemType from 'Models/NavItemType'
import Link from 'next/link'
import React from 'react'

const NavItem:React.FC<{item: NavItemType, className:string}> = ({item, className}) => {
  return (
    <React.Fragment key={item.title}>
        <Link href={item.link}><a className={`${className} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:text-secondary-color`} >{item.title}</a></Link>
    </React.Fragment>
  )
}

export default NavItem