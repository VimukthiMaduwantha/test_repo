import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import '../Styles/navBar.css'
import { FaBars } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function NavLink() {
    const [Mobile, setMobile] = useState(false);
    const location = useLocation();
    const currentURL = location.pathname;
    const navigate = useNavigate();

    const pageNavigate = () => {
        navigate('/cart')
    }
    return (
        <>
            <nav className='navbar'>
                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)} >
                    <Link to='/' className='home'>
                        <li>View Menu</li>
                    </Link>
                    <Link to='/orderAtTable' className='about'>
                        <li>Order At Table</li>
                    </Link>
                    <Link to='/orderOnline' className='services' >
                        <li>Order Online</li>
                    </Link>
                </ul>
                {(currentURL === "/orderAtTable" || currentURL === "/cart") &&
                    < Button size='sm' style={{ backgroundColor: '#E7B10A', border: '1px solid #E7B10A' }} onClick={pageNavigate}>
                        Checkout
                    </Button>
                }
                <Link /* to='/cart' */>
                    <button className='shoppingCart' >
                        <FaShoppingCart style={{ color: 'white' }} />
                    </button>
                </Link>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross style={{ color: 'white' }} /> : <FaBars style={{ color: 'white' }} />}
                </button>
            </nav >
        </>
    )
}

export default NavLink

