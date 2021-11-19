import React from "react";
import Map from './../../assets/Icons/map.png';
import Adress from './../../assets/Icons/address.png';
import Phone from './../../assets/Icons/phone.png';
import Facebook from './../../assets/Icons/facebook.png';
import Instageam from './../../assets/Icons/instagram.png';
import Twitter from './../../assets/Icons/twitter.png';
import './about.scss';
 
export default function About() {
    return (
        <main className='about'>
            <section className='about_text'>
                <h3 className='about_text__page-title'>Who we are?</h3>
                <section className='about_text__text-section'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu sollicitudin massa senectus eu diam pharetra. Sit nisl quisque eget arcu cursus scelerisque. Aliquam et urna tellus blandit sit nulla nec. Ultricies sapien sit lorem aliquet. Phasellus enim feugiat sed parturient elementum varius ut in vel. Neque egestas magna sed orci, consequat. Sit magnis nunc consequat id proin tortor egestas arcu ac. At faucibus leo et, nisi, sollicitudin. Malesuada sagittis massa, viverra tempor etiam hendrerit eget amet. Odio magna ultrices diam, facilisis. Habitant diam eros molestie pretium.</p><br/>
                    <p>Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat orci tristique. Sit eleifend donec bibendum sed fermentum. Amet, sagittis, libero, at nullam vestibulum. Fusce et sit maecenas urna orci felis sodales. Dignissim aliquam at id duis gravida. Nunc sit arcu lectus lorem libero vel vitae adipiscing amet. In cras sed tristique nisl, amet accumsan urna quis. Condimentum laoreet a convallis sit pellentesque laoreet at fringilla. Porttitor ut mi nec cras. Nunc, sit non ipsum aliquam enim. Blandit dictum nunc duis ac faucibus neque feugiat vitae. Quis ac malesuada pulvinar ac cras mollis dictum ullamcorper pretium. Pellentesque ac nunc, eu fermentum erat nunc vel natoque volutpat.</p><br/>
                    <p>Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut massa, praesent viverra integer massa justo. Vitae pellentesque quis sit neque. Facilisis aliquam dolor habitant commodo ultricies. Lacus pellentesque ultricies viverra curabitur at fermentum tincidunt aliquet. Mi congue sed turpis ligula egestas odio tincidunt libero vitae. Amet pellentesque aliquam quam viverra proin urna vitae egestas turpis. Enim, dictum nisl, dictum sed velit. Aliquam dignissim orci auctor ipsum ac ultrices at. Et, nisl, egestas id eget. Nisl diam et scelerisque at consectetur.</p>
                </section>
            </section>
            <section className='about_contact'>
                <section className='about_contact__map'><img src={Map} alt='map icon' /></section>
                <section className='about_contact__social'>
                    <section className='about_contact__social__address'>
                        <img src={Adress} className='about-icons' alt="address icon"/> 
                        <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
                    </section>
                    <section className='about_contact__social__phone'>
                        <img src={Phone} className='about-icons' alt="phone icon"/> 
                        <span>(208) 555-0112</span>
                    </section>
                    <section className='about_contact__social__media'>
                        <img src={Facebook} className='about-icons' alt="facebook icon"/>
                        <img src={Instageam} className='about-icons' alt="instagram icon"/> 
                        <img src={Twitter} className='about-icons' alt="twitter icon"/>  
                    </section>
                    </section>
            </section>
        </main>
    );
}