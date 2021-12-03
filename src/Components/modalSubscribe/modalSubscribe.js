import React from "react";
import './modalSubscribe.scss';
import Close_button from '../../assets/img/close_button.png';
import Modal_img from '../../assets/img/modal-img.png';
import Button from '../../commonComponents/Button/Button'
import postRequest from "../../services/subscribeRequest";

const ModalSubscribe = ({ visible, setVisible }) => {
    if (visible) {
        return (
            <div>
                <section className='modal_bg'></section>
                <section className='modal_main'>
                    <section className='modal_body'>
                        <section className='modal_body__close'><img src={Close_button} onClick={() => setVisible(false)} alt='close modal' /></section>
                        <section className='modal_body__input-field'>
                            <section className="modal_body__text">
                                <h2 className='header_h2_regular text-center'>Give us your email to stay tuned!</h2>
                                <section className="modal_form">
                                    <input 
                                        type='email' 
                                        className="modal_input general_text" 
                                        placeholder="E-mail" defaultValue='' 
                                        id='subscribe-value' 
                                    />
                                    <Button classN="primary-button" onClick={function () {
                                        setVisible(false);
                                        postRequest({ email: `${document.getElementById('subscribe-value').value}` });
                                    }
                                    } name="Subscribe" type='submit'></Button>
                                </section>
                            </section>
                            <section className='modal_body__subtext'>
                                <p className='general_subtext_light text-center'>
                                    You always can undo that in any of your received emails
                                </p>
                            </section>
                        </section>
                    </section>
                    <section className='modal_main__img'><img src={Modal_img} alt='modal img' /></section>
                </section>
            </div>
        )
    } else {
        return <></>
    }

}

export default ModalSubscribe;