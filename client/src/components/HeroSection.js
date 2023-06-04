import React from "react";
import { Button } from "./Button";
import './HeroSection.css'
import '../App.css';

// import Ik from '../images/HomePage.jpg'

function HeroSection(){
    return (
        <div className="hero-container">
            {/* <video src="video path or url" autoPlay loop muted/> for adding the video */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>

    )
}
export default HeroSection