import React from "react";
import './modalSubscribe.scss';
import Close_button from '../assets/img/close_button.png';
import Modal_img from '../assets/img/modal-img.png';
import {useState} from 'react';


const ModalSubscribe = ({visible, setVisible}) => {
     if(visible) {return ( 
        <div>
                <section className='modal_main'>
                    <section className='modal_body'>
                        <section className='modal__close'><img src={Close_button} onClick={() => setVisible(false)}/></section>
                        <section className='modal__input-field'>
                            <section className="modal_body_text">
                                <h2 className='header_h2_regular'>Give us your email to stay tuned!</h2>
                                <form className="modal_form">
                                    <input type='email' className="modal_input" placeholder="E-mail" />
                                    <button className="primary-button" onClick={() => setVisible(false)}>Subscribe</button>
                                </form>
                            </section>
                            <section className='modal__text'><p>You always can undo that in any of your received emails </p></section>
                        </section>
                    </section>
                    <section className='modal__img'><img src={Modal_img} alt='modal img' /></section>
                </section>
        </div>
    )} else {return <></>
    }

}

export default ModalSubscribe;