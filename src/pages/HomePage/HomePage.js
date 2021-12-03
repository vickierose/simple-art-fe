import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

import './styles.scss'

import Pic1 from '../../assets/images/Img1.png'
import Pic2 from '../../assets/images/Img2.png'
import ModalSubscribe from '../../components/modalSubscribe/modalSubscribe'
import Button from '../../commonComponents/Button/Button.js'

function HomePage(showModal) {
    let navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    
    return (
        <Fragment>
            <section className="content">
                <article className="left">
                    <h1 className="header_h1_bold">Desperate to learn drawing? We’ll teach you!</h1>
                    <p className="general_text text">Our school has more than 20 years of experience in teaching people who always thought
                        that they don’t
                        have even a slightest hint of a talent. Some other descriptive stuff that I’m too lazy to make up.
                    </p>
                    <p className="general_text text">With us you will get:</p>
                    <ul className="list">
                        <li>
                            <p className="general_text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <p className="general_text text">Vestibulum commodo id amet non facilisis in.</p>
                        </li>
                        <li>
                            <p className="general_text text">Est eros, vestibulum cursus luctus luctus aenean molestie.</p>
                        </li>
                        <li>
                            <p className="general_text text">Augue ultricies non tristique malesuada justo neque mi, pellentesque lacus.</p>
                        </li>
                    </ul>
                    <Button name='Apply now' classN="apply-btn" onClick={() => navigate("/apply")} />
                </article>
                <div className="right"><img className="image" src={Pic1} alt="paris-pic" /></div>
            </section>

            <section className="content">
                <div className="left"><img className="image" src={Pic2} alt="old-letter-pic" /></div>
                <article className="right order1">
                    <h2 className="header_h2_regular small-heading">Interested but currently have other plans?</h2>
                    <p className="general_text text">Subscribe to our newsletter to stay tuned and get hottest updates and deals.</p>
                    <Button onClick={() => setVisible(true)} name='Subscribe' classN="subs-btn"/>
                    <ModalSubscribe visible={visible} setVisible={setVisible}/>
                </article>
                
            </section>
        </Fragment>
    )
}

export default HomePage
