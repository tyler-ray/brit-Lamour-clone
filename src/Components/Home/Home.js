import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav'

import SideNav from '../SideNav/SideNav'
export default class Home extends Component {

    render() {
        // console.log(this.props.match)
        return (
            <div className="Home-wrapper height">
                <SideNav match={this.props.match} />
                <TopNav />
                This is the home page!
                
            </div>
        )
    }
}
