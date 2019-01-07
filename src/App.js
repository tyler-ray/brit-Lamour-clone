import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import routes from './Routes/Routes'
// import SideNav from './Components/SideNav/SideNav'
// import TopNav from './Components/TopNav/TopNav'
// import Footer from './Components/Footer/Footer'
import './Components/CSS/reset.css'
import './Components/CSS/SideNav.css'
import './Components/CSS/Home.css'
import './Components/CSS/SocialMedia.css'
import './Components/CSS/Landing.css'
import './Components/CSS/TopNav.css'
import './Components/CSS/Footer.css'

class App extends Component {
    render() {
        return (
            <HashRouter>

                <div className="App">
                    
                    {routes}
               
                </div>

            </HashRouter>
        );
    }
}

export default App;




