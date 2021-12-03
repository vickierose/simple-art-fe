import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';
export default function Footer() {
    return (
        <footer className='footer_main'>
            <section className='footer_simple-art__text general_subtext'>Ⓒ Simple Art, 2021<br/>
            All rights reserved</section>   
            <section className='footer_nav'>
                <Link to='/' className='footer_link general_subtext'>Terms</Link>
                <Link to='/' className='footer_link general_subtext'>Privacy policy</Link>
                <Link to='/' className='footer_link general_subtext'>Help&Support</Link>
            </section>
        </footer>
    );
}