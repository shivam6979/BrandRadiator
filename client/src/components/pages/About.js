import React from "react";
import './About.css'
import AboutImage from '../../images/AboutUs.png'
function About(){
    return (
        <div className="parent">
            <div className="left">
                <img src={AboutImage} alt="oops"/>
            </div>

            <div className="right">
                <h1> Who we are</h1>
                <p>
                    The About Us page of your website is an essential source of information for all who want to know more about your business.
                    About Us pages are where you showcase your history, what is unique about your work, your company’s values, and who you serve.
                    The design, written content, and visual or video elements together tell an important story about who you are and why you do it.
                </p>
            </div>
        </div>
    )
}

export default About