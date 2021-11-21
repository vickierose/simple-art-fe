import React from "react";
import './modalSubscribe.scss';
import Close_button from '../assets/img/close_button.png';
import Modal_img from '../assets/img/modal-img.png';


function ModalSubscribe (props) {
    function hideModal(){
        document.querySelector('.modal_main').setAttribute('style', 'display: none')
    }
    function openModal(){
        document.querySelector('.modal_main').setAttribute('style', 'display: flex')
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
        <section className='modal_main'>
            <section className='modal_body'>
                <section className='modal__close' onClick={hideModal}><img src={Close_button} /></section>
                <section className='modal__input-field'>
                    <section className="modal_body_text">
                        <h2 className='header_h2_regular'>Give us your email to stay tuned!</h2>
                        <form className="modal_form">
                            <input type='email' className="modal_input" placeholder="E-mail" />
                            <button className="primary-button">Subscribe</button>
                        </form>
                    </section>
                    <section className='modal__text'><p>You always can undo that in any of your received emails </p></section>
                </section>
            </section>
            <section className='modal__img'><img src={Modal_img} alt='modal img' /></section>
        </section>
        </div>
    )
}

export default ModalSubscribe;