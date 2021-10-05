import React from 'react';
import styles from '../../styles/Layout.module.scss';
import NavBar from '../navagation/NavBar';
import Meta from '../Meta/Meta';
const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Meta />
            <NavBar />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout
