import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import Back from '../../assets/Icons/backBtn.png'

import HeaderNav from './HeaderNav/HeaderNav'

import './styles.scss'

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isApllyPage, setIsApllyPage] = useState(false);

    useEffect(() => {
        if (location.pathname === '/apply') {
            setIsApllyPage(true);
        } else setIsApllyPage(false);
    }, [location]);

    return (
        <header className="mainHeader">
            <div>
                <NavLink to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </NavLink>
            </div>
            {isApllyPage ?
                <button className="back-button" onClick={() => navigate(-1)} to='/'>
                    <img className="back-image" src={Back} alt="back-icon" /><p className="header_h5_medium text-back">Back</p>
                </button>
                : <HeaderNav />}
        </header>
    )
}

export default Header
