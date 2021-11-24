import React, { Fragment } from 'react'

import './styles.scss'
import Pic1 from '../../images/Img1.png'
import Pic2 from '../../images/Img2.png'

import Button from '../../commonComponents/Button/Button.js'
import { useNavigate } from 'react-router'

function HomePage() {
    let navigate = useNavigate();
    return (
        <Fragment>
            <section className="content">
                <article className="left">
                    <h1 className="heading">Desperate to learn drawing? We’ll teach you!</h1>
                    <p className="text">Our school has more than 20 years of experience in teaching people who always thought
                        that they don’t
                        have even a slightest hint of a talent. Some other descriptive stuff that I’m too lazy to make up.
                    </p>
                    <p className="text">With us you will get:</p>
                    <ul className="list">
                        <li>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <p className="text">Vestibulum commodo id amet non facilisis in.</p>
                        </li>
                        <li>
                            <p className="text">Est eros, vestibulum cursus luctus luctus aenean molestie.</p>
                        </li>
                        <li>
                            <p className="text">Augue ultricies non tristique malesuada justo neque mi, pellentesque lacus.</p>
                        </li>
                    </ul>
                    <Button name='Apply now' classN="apply-btn" onClick={() => navigate("/apply")} />
                </article>
                <div className="right"><img className="image" src={Pic1} alt="paris-pic" /></div>
            </section>

            <section className="content">
                <div className="left"><img className="image" src={Pic2} alt="old-letter-pic" /></div>
                <article className="right order1">
                    <h2 className="small-heading">Interested but currently have other plans?</h2>
                    <p className="text">Subscribe to our newsletter to stay tuned and get hottest updates and deals.</p>
                    <Button name='Subscribe' classN="subs-btn" />
                </article>
            </section>
        </Fragment>
    )
}

export default HomePage
