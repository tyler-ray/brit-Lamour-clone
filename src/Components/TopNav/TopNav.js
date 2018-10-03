import React from 'react';
import Search from '../../Images/Search Icon.svg'
import SocialMedia from '../SocialMedia/SocialMedia'
function TopNav() {
    return (
        <div className="TopNav-Wrapper">
            <div className="middle">
                <img src="../../Images/Signature.JPG" alt="Brit's Signature" />
                <p className='phrase'>straight from the heart</p>
            </div>
            <div className="right">
                <SocialMedia />
                {/* <img src={Search} alt="search Icon" className="searchIcon" /> */}
            </div>
        </div>
    )
}
export default TopNav