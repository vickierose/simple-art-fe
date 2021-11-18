import React from 'react'

import './styles.scss'

function Button({name='Apply'}) {
    return (
        <button className="btn">{name}</button>
    )
}

export default Button
