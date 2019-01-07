import React from 'react';
import axios from 'axios';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
function Shop (){

    function request (){
        axios.get('http://britlamour.jtylerray.com/api/checkfunction').then((res)=>{console.log('response',res.data)})
    }
    return(
        <div className="Shop">
        <SideNav/>
        <TopNav/>
            Shop
            <button onClick={request}> Click me!</button>
        <Footer/>
        </div>
    )
} 

export default Shop