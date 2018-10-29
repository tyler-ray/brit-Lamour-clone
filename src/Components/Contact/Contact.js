import React, { Component } from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav'

class Contact extends Component {

    render() {
        return (
            <div className="contact-wrapper height">
                <SideNav />
                <TopNav/>
                Contact Brit!
            </div>
        )
    }

}
export default Contact