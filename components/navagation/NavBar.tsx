import React from 'react'
import Link from 'next/link';
import navStyles from '../../styles/Nav.module.scss';

const NavBar: React.FC = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog/Blog">Blog</Link></li>
                <li><Link href="/about/About">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
