import React from "react";
import './Footer.scss';
export default function Footer() {
    return (
        <footer className='footer_main'>
            <section className='footer_simple-art__text'>Ⓒ Simple Art, 2021<br/>
            All rights reserved</section>   
            <section className='footer_links'>
                <a href='#' className='footer_links__a_tag'>Terms</a>
                <a href='#' className='footer_links__a_tag'>Privacy policy</a>
                <a href='#' className='footer_links__a_tag'>Help&Support</a>
            </section>
        </footer>
    );
}