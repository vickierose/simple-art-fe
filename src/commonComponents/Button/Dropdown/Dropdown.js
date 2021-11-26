import React, { useState } from 'react'

import './styles.scss'

function Dropdown({ value, name, onChange, disabled }) {
    console.log(name)

    return (
        <details className="custom-select" name={name}>
            <summary className="radios">
                <input defaultChecked type="radio" name={name} id="default" title="Select..." />
                {value.map((el, i) => {
                    return <input key={i} type="radio" name={name} id={`item${el.id}`} title={el.value} onChange={onChange} />;
                })}
            </summary>
            <div className="container-list">
                <ul className="general_text drop-list">
                    {value.map((el, i) => {
                        return <li key={i} className="drop-item">
                            <label  className="drop-item-text" htmlFor={`item${el.id}`}>{el.value}</label>
                        </li>
                    })}
                </ul>
            </div>
        </details>
    )
}

export default Dropdown
