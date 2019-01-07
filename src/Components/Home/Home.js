import React, { Component } from 'react';
import HomeImg from '../../Images/Brit Home Pic.jpg'
import SocialMedia from '../SocialMedia/SocialMedia'
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
export default class Home extends Component {

    render() {
        return (
            <div className="Home-wrapper">
            <SideNav/>
            <TopNav/>
                <h1 className='title'>MAGNIFY YOURSELF AS YOU MAGNIFY OTHERS</h1>
                <div className="main-img-wrapper">
                    <img src={HomeImg} alt="Welcome home" className='HomeImg' />
                </div>
                <div className="both-wrapper">
                    <div className="left-wrapper">
                        <div className="home-comp-wrap first">
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5c1f077e40ec9abd16b3e7bf/1545537426258/portland-12.jpg" alt="Fashion" id="FashionImg" />
                            </div>
                            <div className="red-box" id="FashionBox">
                                <h4 className="red-title">FASHION</h4>
                                <p className="red-text">Say hello to affordable trends & fashion!</p>
                            </div>
                            <div className="text-wrapper" id="quote-wrapper">
                                <h5 className="quote">"....as we let our own light shine, we unconsciously give others permission to do the same.<strong className='bold'> As we are liberated from our own fear, our presence automatically liberates others.</strong>"</h5>
                                <p id="Marianne">- Marianne Williamson</p>

                            </div>
                        </div>
                        <div className="home-comp-wrap second">
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5c1f07d7f950b7ec9af55958/1545537507187/portland.day3-33.jpg" id='TravelImg' alt="" />
                            </div>
                            <div className="red-box" id="TravelBox">
                                <h4 className="red-title">Travel Tips</h4>
                                <p className="red-text">Follow along as I follow my dreams for tips, pictures, videos, behind the scenes, & more!</p>
                            </div>
                            <div className="text-wrapper">
                                <h4>“Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us.......”</h4>
                            </div>
                        </div>
                        <div className="home-comp-wrap third">
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b41aa22f950b7059f8b4961/1531034532811/" id='LifestyleImg' alt="" />
                            </div>
                            <div className="red-box" id="LifestyleBox">
                                <h4 className="red-title">LIFESTYLE</h4>
                                <p className="red-text">Follow my blog for highlights & behind the scenes of my daily life!</p>
                            </div>
                        </div>
                    </div>

                    <div className="right-wrapper">
                        <div className="home-comp-wrap">
                            <h1 className="headder">“Your playing small does not serve the world...”</h1>
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b5821a91ae6cfbbc679d954/1532542481547/" id='cokeImg' alt="" />
                            </div>

                        </div>
                        <div className="home-comp-wrap">
                            <div className="red-box" id="SecondaryBox">
                                <h5 className="red-title secondaryTitle">Need Recipes?</h5>
                                <p className="red-text">Welcome to my kitchen! This is where I share our favorite recipes for quick, easy, & tasty dinners!</p>
                            </div>
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5c1f0804c2241bdf92851273/1545537564377/portland.day4-113.jpg" id='RecipesImg' alt="" />
                            </div>
                        </div>
                        <div className="home-comp-wrap">
                            <div className="red-box" id='SecondaryBox'>
                                <h5 className="red-title secondaryTitle">Beauty Tips</h5>
                                <p className="red-text">My #1 beauty choices!!</p>
                            </div>
                            <div className="img-wrapper1">
                                <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b6539718a922d4284ed1a76/1533360519171/" alt="" id='BeautyImg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photography-wrapper">
                    <div className="red-box main-box">
                        <h4 className="red-title">Need a Photographer?</h4>
                        <p className="red-text">Hire me to capture your Engagements, Bridals and/or Wedding!</p>
                    </div>
                    <div className="img-wrapper1">
                        <img src="https://static1.squarespace.com/static/5973bff5e58c628c612cfc99/t/5b6bbe324fa51a5e189e4591/1533787857342/" id='photography' alt="" />
                    </div>
                </div>
                <div className="social-wrapper">
                    <SocialMedia />
                </div>
                <Footer/>
            </div>
        )
    }
}
