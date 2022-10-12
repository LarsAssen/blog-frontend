import React from 'react';
import NavBar from '../navigation/NavBar';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
const Layout: React.FC<{children: any}> = ({children}) => {
    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits, travel" description="Everything about ultra running, health and self improvement. Learn all about how to become your best self." />
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
