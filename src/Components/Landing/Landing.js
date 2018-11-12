import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../SocialMedia/SocialMedia';
import signature from '../../Images/Signature.png'
function Start() {
    return (
        <div className="Landing-wrapper">
            <div className="empty">
            <h1 style = {{"color":"red", "font-size":"36pt"}}>Please keep in mind this website is still under production by J. Tyler Ray as a clone. If you're looking for Brit's website please <a href="https://britlamour.com/home">Click Here!</a></h1>
            </div>
            <div className="Enter-Site">
                <div className="enter-wrapper">
                    <img src={signature} alt="Brit's signture" id='landing-signature' />
                    <div className="middle">
                    <h1 className="Landing-Title">MAGNIFY YOURSELF</h1>
                    <h2 className='SubTitle'>AS YOU MAGNIFY OTHERS</h2>
                    <Link to='/home'><button className="enter-site-button">STAY INSPIRED</button></Link>
                    </div>
                    <div className="social-wrapper">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start

