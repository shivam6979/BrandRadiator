import React from "react";
import	{Link} from "react-router-dom";
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'] //contains css class
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick,buttonStyle,buttonSize})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]//
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0]
    return (
        <Link to='/sign-up' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}