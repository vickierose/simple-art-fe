import React, { Fragment } from 'react'
import { useNavigate } from 'react-router'

import Button from '../../commonComponents/Button/Button'
import Checkmark from '../../assets/images/checkmark.png'

import './styles.scss'

function ComfirmationPage() {
    let navigate = useNavigate();
    return (
        <Fragment>
            <section className="center">
                <div className="make-center"><img className="image-checkmark" src={Checkmark} alt="checkmark-pic" /></div>
                <h3 className="header_h3_bold make-center">Thank you!</h3>
                <p className="general_text text make-center">Check your mailbox. There should be a confirmation letter.<br />
                    We’ll contact you soon to give you info about next steps</p>

                <div className="make-center">
                    <Button name='Back to Home' classN="subs-btn" onClick={() => navigate("/")} />
                </div>
            </section>
        </Fragment>
    )
}

export default ComfirmationPage
