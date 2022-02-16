import React, { useState } from 'react';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import router from 'next/router';
import { animations } from 'lib/animations';
import AnimSwitcher from '../AnimSwitcher';


const Layout: React.FC = ({children}) => {
    const startIndex = 0;
    const [animation, setAnimation] = useState(animations[startIndex]);
    const [exitBefore, setExitBefore] = useState(false);
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    const items = [ 
        "/",
        "/blog/Blog",
        "/about/About",
        '/about/CurrentLife/CurrentLifePage'
    ]

    return (
        <div>
            <Meta title="The Running Explorer" keywords="ultrarunning, books, habits, travel" description="Everything about ultra running, health and self improvement. Learn all about how to become your best self." />
            <div>
            <NavBar/>
            <div>
                <AnimSwitcher
                    anims={animations}
                    setAnimation={setAnimation}
                    setExitBeforeEnter={setExitBefore}
                    startIndex={startIndex}
                />
            </div>
            <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter={!exitBefore} >
                <m.div
                    key={items.concat(animation.name)}
                    className="page-wrap"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animation.variants}
                    transition={animation.transition}
                >
                            {children}
                        </m.div>
                </AnimatePresence>
            </LazyMotion>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
