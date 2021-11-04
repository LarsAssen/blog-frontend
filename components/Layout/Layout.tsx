import React from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits" description="Everything about ultra running, health and self improvement." />
            <NavBar/>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
