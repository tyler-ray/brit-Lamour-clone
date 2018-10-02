import React, { Component } from 'react';

import SideNav from '../SideNav/SideNav'
export default class Home extends Component {

    render() {
        // console.log(this.props.match)
        return (
            <div className="Home-wrapper height">
            <SideNav match={this.props.match} />
                Home
            </div>
        )
    }
}
