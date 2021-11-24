import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'

import HeaderNav from './HeaderNav/HeaderNav'

import './styles.scss'

function Header() {
    return (
        <header className="mainHeader">
            <div>
                <NavLink to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </NavLink>
            </div>
            {<HeaderNav />}
        </header>
    )
}

export default Header
