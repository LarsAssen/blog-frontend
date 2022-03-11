import Link from 'next/link';
import React from 'react'
import Logo from '../../public/logo.png';
import Image from 'next/image';

const NavLogo:React.FC = () => {
  return (
    <Link href="/">
        <a className="inline-flex items-center p-2 mr-4">
            <Image height={75} width={75} alt="logo" src={Logo}></Image>
        </a>
    </Link>
  )
}

export default NavLogo