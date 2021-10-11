import React from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits" description="Everything about ultra running, health and self improvement." />
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
