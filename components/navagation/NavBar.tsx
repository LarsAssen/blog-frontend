import React from 'react'
import Link from 'next/dist/client/link'

const NavBar: React.FC = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
        </div>
    )
}

export default NavBar
