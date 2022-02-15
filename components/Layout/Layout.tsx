import React from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
const Layout: React.FC = ({children}) => {

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits, travel" description="Everything about ultra running, health and self improvement. Learn all about how to become your best self." />
            <NavBar/>
            <div>
                <main>
                <motion.main
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }} // Set the transition to linear
                    className=""
                >
                    {children}
                </motion.main>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
