import React, { Component } from 'react';
import {Link } from 'react-router-dom'
class SideNav extends Component {
    constructor() {
        super()
        this.state = {
            open: true,
        }
    }
    toggleSideNav = () =>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div className="sidenav-wrapper">
                {this.state.open?
                <div className="sideNav-open">
                    <Link to='/home'><div className="homeLink">Home</div></Link>
                    <Link to ='/blog'><div className="blogLink">Blog</div></Link>
                    <Link to = 'gallery-home'><div className="galleryLink">Photo</div></Link>
                    <Link to ='/real-estate'><div className="realEstateLink">Real Estate</div></Link>
                    <Link to ='/shop-my-style'><div className="realEstateLink">Shop My Style</div></Link>
                    <Link to ='/stay-inspired'><div className="meetBritLink">Stay Inspired</div></Link>
                    <Link to ='/about'><div className="meetBritLink">Meet Brit</div></Link>
                    <Link to ='/contact'><div className="contactLink">Contact Brit</div></Link>
                </div>

            :
                <div className="sideNav-closed">
                    <p>Closed</p>
                </div>
}
<button onClick={this.toggleSideNav}>Toggle SideNav</button>
            </div>
        )
    }
}
export default SideNav