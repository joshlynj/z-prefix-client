import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
<>
    <nav className="navbar">
        <div className = "navbar-container">
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
               Blog Town
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Posts' className='nav-links' onClick={closeMobileMenu}>
                        Posts
                    </Link>
                </li>

                <li>
                    <Link to='/login'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}>
                       Log In
                    </Link>
            </li>
          </ul>
            {button && <Button buttonStyle='btn--outline'>Log In</Button>}
        </div>
    </nav>
</>
    );
}

export default Navbar;
