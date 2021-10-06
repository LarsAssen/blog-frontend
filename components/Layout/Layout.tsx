import React from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Meta />
            <NavBar />
        <div>
            <main>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout
