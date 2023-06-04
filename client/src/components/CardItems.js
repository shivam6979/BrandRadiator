import React from "react";
import {Link} from 'react-router-dom';


function CardItems(props){ // taking props from Cards.js
    return(
        <>
        <li className="cards__item">
            {/* basically it is for image and description */}
            <Link className="cards__item__link" to={props.path} >  {/* this actually taking whatever we added on the cards  */}
                <figure className="cards__item__pic__wrap" data-category={props.label}> {/* */}
                    <img src={props.src} alt="Travel Image" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>

        </>
    )
}
export default CardItems