import React from "react";
import CardItems from "./CardItems";
import './Cards.css'
import image from '../images/ant_5.jpg'

function Cards(){
    return(
        <div className="cards">
            <h1>Check out these EPIC Destination</h1>
            <div className="cards__container">
                <div className="card__wrapper">
                    <ul className="cards__item">
                        {/* passing props  */}
                        <CardItems src={image} text='explore the hidden water fall deep inside the amazon jungle'
                        label='Adventure' path='/services'/>

                        <CardItems src={image} text='explore the hidden water fall deep inside the amazon jungle'
                        label='Adventure' path='/services'/>
                    </ul>

                    <ul className="cards__item">
                        {/* passing props  */}
                        <CardItems src={image} text='explore the hidden water fall deep inside the amazon jungle'
                        label='Adventure' path='/services'/>

                        <CardItems src={image} text='explore the hidden water fall deep inside the amazon jungle'
                        label='Adventure' path='/services'/>

                        <CardItems src={image} text='explore the hidden water fall deep inside the amazon jungle'
                        label='Adventure' path='/services'/>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards