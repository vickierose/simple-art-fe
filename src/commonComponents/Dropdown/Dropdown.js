import React, { useRef } from 'react'

import './styles.scss'

function Dropdown({ value, name, onChange, disabled }) {
    const refDet = useRef(null);

    return (
        <>
            {disabled ?
                <select className="general_text disabled-selector" disabled={true}>
                    <option>Select...</option>
                </select> :

                <details className="custom-select" name={name}  ref={refDet}>
                    <summary className="radios">
                        <input defaultChecked type="radio" name={name} id="default" title="Select..." />
                        {value.map((el) => {
                            return <input key={`${name}-${el.id}`} type="radio" name={name} id={`${name}-${el.id}`} title={el.value} onChange={() => {
                                refDet.current.open = false;
                                onChange(el.id)
                            }} />;
                        })}
                    </summary>
                    <div className="container-list">
                        <ul className="general_text drop-list">
                            {value.map((el) => {
                                return <li key={`${name}-${el.id}`} className="drop-item">
                                    <label className="drop-item-text" htmlFor={`${name}-${el.id}`}>{el.value}</label>
                                </li>
                            })}
                        </ul>
                    </div>
                </details>
            }
        </>
    )
}

export default Dropdown
