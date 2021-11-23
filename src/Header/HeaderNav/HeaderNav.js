import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../commonComponents/Button/Button.js'

import './styles.scss'

function HeaderNav() {
    return (
        <nav className="header-navigation">
            <ul className="list">
                <li className="item">
                    <NavLink className="navigation" to="/courses">Courses</NavLink>
                </li>
                <li className="item">
                    <NavLink className="navigation" to="/teachers">Teachers</NavLink>
                </li>
                <li className="item">
                    <NavLink className="navigation" to="/prices">Prices</NavLink>
                </li>
                <li className="item">
                    <NavLink className="navigation" to="/about">About us</NavLink>
                </li>
                <li className="item">
                    <Button name='Apply' />
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav
