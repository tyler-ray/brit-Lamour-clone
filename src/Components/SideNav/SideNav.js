import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../../Images/Facebook.svg'
import SocialMedia from '../SocialMedia/SocialMedia'
import Delete from '../../Images/Delete.svg'
import Hamburger from '../../Images/Menu.svg'

class SideNav extends Component {
    constructor(props) {
        super()
        this.state = {
            open: true,
            one: "hidden",
            two: 'hidden',
            three: 'Hamburger'
        }
    }
    openSideNav = () => {

        this.setState({
            open: !this.state.open,
            one: 'links-wrapper',
            two: 'welcome-wrapper',
            three: 'hidden'
        })
    }
    closeSideNav = () => {
        this.setState({
            open: !this.state.open,
            one: 'hidden',
            two: 'hidden',
            three: 'Hamburger'
        })
    }

    render() {
        console.log(this.props.match)
        return (
            // <div className="mySideNav">
            <div className="sideNav-wrapper">
                <div className={this.state.one}>
                    <img src={Delete} onClick={() => { this.closeSideNav() }} alt="Close Button" className="Close Button" />
                    <Link to='/home'><h3 className="homeLink Link">Home</h3></Link>
                    <Link to='/blog'><h3 className="blogLink Link">+ Blog</h3></Link>
                    <Link to='gallery-home'><h3 className="galleryLink Link">+ Photo</h3></Link>
                    <Link to='/real-estate'><h3 className="realEstateLink Link">Real Estate</h3></Link>
                    <Link to='/shop-my-style'><h3 className="shopMyStyleLink Link">Shop My Style</h3></Link>
                    <Link to='/stay-inspired'><h3 className="stayInspiredLink Link">Stay Inspired</h3></Link>
                    <Link to='/about'><h3 className="meetBritLink Link">Meet Brit</h3></Link>
                    <Link to='/contact'><h3 className="contactLink Link">Contact</h3></Link>
                </div>
                <div className={this.state.two}>
                    <div className="welcome-wrapped">
                        <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b654e2a1ae6cf3410e7bd4a/1533365859520/?format=300w" alt="Brit img" className="sideNav-welcome-img" />

                        <h2 className="Link" id="hey">Hey!</h2>
                        <p id="welcome">Welcome to my blog!</p>
                        <SocialMedia />
                    </div>
                </div>
                <div className="myHamburger">
                    <img src={Hamburger} alt="Hamburger" onClick={() => this.openSideNav()} className={this.state.three} />
                </div>
            </div>
            // </div>

        )
    }
}
export default SideNav