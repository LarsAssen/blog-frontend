import React from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
const Layout: React.FC<{categories:any[]}> = ({children, categories}) => {
    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits" description="Everything about ultra running, health and self improvement." />
            <NavBar categories={categories}/>
        <div>
            <main>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout
