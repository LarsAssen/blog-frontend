import React from 'react';
import styles from '../../styles/Layout.module.scss';
import NavBar from '../navagation/NavBar';
const Layout: React.FC = ({children}) => {
    return (
        <div>
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
