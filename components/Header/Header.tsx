import React from 'react'
import headerStyles from '../../styles/Header.module.scss';

const img = 'https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356_960_720.jpg'

const divStyle = {
    backgroundImage: 'url("' + img + '")',
};

const Header: React.FC = () => {
    return (
        <div className="w-full h-full bg-no-repeat bg-cover bg-hero-pattern bg-left">
            
        </div>
    )
}

export default Header
