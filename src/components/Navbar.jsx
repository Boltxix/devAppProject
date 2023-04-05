import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className='link' to='/'>
                        <h6>HOME</h6>
                    </Link>
                    <Link className='link' to='/about'>
                        <h6>ABOUT</h6>
                    </Link>
                    <Link className='link' to='/cocktails'>
                        <h6>COCKTAILS</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar