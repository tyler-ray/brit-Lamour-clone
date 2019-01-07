import React from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
function Gallery (){
    return(
        <div className="Gallery">
        <SideNav/>
        <TopNav/>
            Gallery
            <Footer/>
        </div>
    )
} 

export default Gallery