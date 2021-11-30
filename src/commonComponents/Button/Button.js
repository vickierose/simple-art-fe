import React from 'react'
import './styles.scss'

function Button({name='Apply', classN='', onClick}) {
    return (
        <button onClick={onClick} className={`btn ${classN}`}>{name}</button>
    )
}

export default Button
 