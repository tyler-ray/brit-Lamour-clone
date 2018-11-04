import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'

import one from '../../Images/1.jpg'
import two from '../../Images/2.jpg'
import three from '../../Images/3.jpg'
import four from '../../Images/4.jpg'
import five from '../../Images/5.jpg'
import six from '../../Images/6.jpg'
import seven from '../../Images/7.jpg'
import eight from '../../Images/8.jpg'
import nine from '../../Images/9.jpg'
import ten from '../../Images/10.jpg'
// import  from '../../Images/'
function Footer() {
    return (
        <div className="Footer">
            <div className="socialSpacer">

            </div>
            <div className="subscribeBlock">
                <h1 className='subscribe'>Subscribe</h1>
                <p className='GetUpdates'>Get updates, special offers, & exclusives!</p>
                <input type="text" placeholder="Email Address" className='input-email' /> <button className='sign-up-button'>SIGN UP!</button>
                <div className="socialWrapper1">
                    <SocialMedia />
                </div>
            </div>
            <div className="footerImages">
                <div className="photo-wrapper">
                    <img src={one} alt="Brittany" className='FooterImg one portrait' />

                </div>
                <div className="photo-wrapper">
                    <img src={two} alt="Brittany" className='FooterImg two' />

                </div>
                <div className="photo-wrapper">

                    <img src={three} alt="Brittany" className='FooterImg three portrait' />
                </div>
                <div className="photo-wrapper">
                    <img src={four} alt="Brittany" className='FooterImg four' />

                </div>
                <div className="photo-wrapper">
                    <img src={five} alt="Brittany" className='FooterImg five' />

                </div>
                <div className="photo-wrapper">
                    <img src={six} alt="Brittany" className='FooterImg six' />

                </div>
                <div className="photo-wrapper">
                    <img src={seven} alt="Brittany" className='FooterImg seven' />

                </div>
                <div className="photo-wrapper">
                    <img src={eight} alt="Brittany" className='FooterImg eight' />

                </div>
                <div className="photo-wrapper">
                    <img src={nine} alt="Brittany" className='FooterImg nine portrait' />

                </div>
                <div className="photo-wrapper">
                    <img src={ten} alt="Brittany" className='FooterImg ten' />

                </div>
            </div>
            <div className="bottomNav-wrapper">

                <div className="bottomNav">
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Beauty</p>
                    <p>Recipes</p>
                    <p>Photo</p>
                    <p>Real Estate</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

            </div>
        </div>
    )
}

export default Footer