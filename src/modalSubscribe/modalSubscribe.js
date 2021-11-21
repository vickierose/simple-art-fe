import React from "react";
import './modalSubscribe.scss';
import Close_button from '../close_button.png';

let ModalSubscribe = props => {
    return (
        <section className={`modal_main ${props.isOpened? 'open' : 'close'}`}>
                <section className='modal_body'>
                    <section className='modal__close' onClick={props.onModalClose}><img src={Close_button}/></section>
                    <section className='modal__input-field'></section>
                    <section className='modal__img'></section>
                    <section className='modal__text'></section>
                </section>
        </section>
    )
}

export default ModalSubscribe;