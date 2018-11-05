import React from 'react';
// import Search from '../../Images/Search Icon.svg'
import SocialMedia from '../SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
function TopNav() {
    return (
        <div className="TopNav-Wrapper">
            <div className="divWrapper">
                <div className="middle">
                    <div className="img-wrapper">
                        <Link to='/home'>
                            <img className='signature' src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b79d563032be447994cd518/1538558938439/?format=1500w" alt="Brit's Signature" />
                        </Link>
                    </div>
                    <p className='phrase'>straight from the heart</p>
                </div>
                <div className="right">
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}
export default TopNav