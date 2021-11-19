import React from "react";
import './Footer.scss';
export default function Footer() {
    return (
        <footer className='footer_main'>
            <section className='footer_simple-art__text'>Ⓒ Simple Art, 2021<br/>
            All rights reserved</section>   
            <section className='footer_nav'>
                <a href='#' className='footer_link'>Terms</a>
                <a href='#' className='footer_link'>Privacy policy</a>
                <a href='#' className='footer_link'>Help&Support</a>
            </section>
        </footer>
    );
}