import React from 'react'

import './styles.scss'

function Button({name='Apply', classN=''}) {
    return (
        <button className={`btn ${classN}`}>{name}</button>
    )
}

export default Button
