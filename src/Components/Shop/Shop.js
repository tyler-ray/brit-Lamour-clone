import React from 'react';
import axios from 'axios';
function Shop (){

    function request (){
        axios.get('http://britlamour.jtylerray.com/api/checkfunction').then((res)=>{console.log('response',res.data)})
    }
    return(
        <div className="Shop">
            Shop
            <button onClick={request}> Click me!</button>
        </div>
    )
} 

export default Shop