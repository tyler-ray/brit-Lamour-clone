import React from 'react'
import {Switch, Route} from 'react-router-dom'


//IMPORT COMPONENTS
import Landing from '../Components/Landing/Landing'
import Home from '../Components/Home/Home'
import Blog from '../Components/Blog/Blog'
import Contact from '../Components/Contact/Contact'
// import BlogPost from '../Components/Post/BlogPost'
import GalleryHome from '../Components/Gallery/GalleryHome'
import Gallery from '../Components/Gallery/Gallery'
import Rates from '../Components/Gallery/Rates'
import Shop from '../Components/Shop/Shop'
import StayInspired from '../Components/StayInspired/StayInspired'
import Details from '../Components/Gallery/Details'
import RealEstate from '../Components/RealEstate/RealEstate'

export default <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path = '/home' component = {Home}/>
    <Route path = '/gallery-home' component = {GalleryHome}/>
    <Route path = '/gallery' component = {Gallery}/>
    <Route path = '/contact' component = {Contact}/>
    <Route path = '/blog' component = {Blog}/>
    <Route path = '/pricing' component = {Rates}/>
    <Route path = '/details' component = {Details}/>
    <Route path = '/real-estate' component = {RealEstate}/>
    <Route path = '/shop-my-style' component = {Shop}/>
    <Route path = '/stay-inspired' component = {StayInspired}/> 

    <Route path = '/about' component = {Home}/>
</Switch>
