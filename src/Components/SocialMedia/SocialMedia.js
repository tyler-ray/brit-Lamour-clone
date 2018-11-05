import React from 'react';
import Instagram from '../../Images/Instagram.svg'
import Facebook from '../../Images/Facebook.svg'
import twitter from '../../Images/twitter.svg'
function SocialMedia() {
    return (
        <div className="SocialMedia">
                <img src={Instagram} alt="Instagram" className="Social Instagram" />
                <img src={Facebook} alt="Facebook" className="Social Facebook" />
                <img src={twitter} alt="Twitter" className="Social Twitter" />
        </div>
    )
}
export default SocialMedia