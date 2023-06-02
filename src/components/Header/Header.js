import React from 'react';
import {Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <ul className='header'>
                <li>
                   <Link className='header-item' to='/'>BLOG</Link>
                </li>
                <li>
                    <Link className='header-item' to='/maps'>GOOGLE MAPS API</Link>
                </li>
                {/* <li>DB LIST(SOON)</li> */}
            </ul>
        </>
      );
    };
    
export default Header;
    