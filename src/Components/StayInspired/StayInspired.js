import React from 'react';
import SideNav from '../SideNav/SideNav';
import Footer from '../Footer/Footer'
import TopNav from '../TopNav/TopNav'

function StayInspired (){
    return(
        <div className="StayInspired height">
            <SideNav/>
            <TopNav/>
            Stay inspired Mo-Fos!
            <Footer/>
        </div>
    )
} 

export default StayInspired