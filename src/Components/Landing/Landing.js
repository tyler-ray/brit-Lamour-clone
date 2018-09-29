import React from 'react'
import {Link} from 'react-router-dom'
function Start () {
    return(
        <div className="start-wrapper">
            <Link to = '/home'><button>Enter Site</button></Link>
        </div>
    )
}

export default Start

