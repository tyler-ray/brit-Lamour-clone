import React, { Component } from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer'
class Contact extends Component {

    render() {
        return (
            <div className="contact-wrapper">
            <SideNav/>
            <TopNav/>
                Contact Brit!
                <Footer/>
            </div>
        )
    }

}
export default Contact