import React, {useState, useEffect} from "react";
import	{Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import { Button } from "./Button";
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>{ setClick(!click) }

    const closeMobileMenu=()=>{ setClick(false) }

    // function to display the button on mobile;
    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true)
        }
    }

    // after refresh the sign button is visiable in the mobile view so handle this
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton) // show when everwe resize the screen i want to get show button to basically work for me

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu} >
                    LOGO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars}/>}{/*set the hangburger menu  */}
                    </div>
                    {/* on mobile mode or small screen */}
                    <ul className={click ? "nav-menu active" : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contactus' className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/admin' className="nav-links" onClick={closeMobileMenu}>
                                Admin
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button> }{/* if button is true */}

                </div>
            </nav>

        </>
    )
}

export default Navbar