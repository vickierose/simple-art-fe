import React from "react";
import './Footer.scss';
export default function Footer() {
    return (
        <footer className='footer_main'>
            <section className='footer_simple-art__text general_subtext'>Ⓒ Simple Art, 2021<br/>
            All rights reserved</section>   
            <section className='footer_nav'>
                <a href='#' className='footer_link general_subtext'>Terms</a>
                <a href='#' className='footer_link general_subtext'>Privacy policy</a>
                <a href='#' className='footer_link general_subtext'>Help&Support</a>
            </section>
        </footer>
    );
}