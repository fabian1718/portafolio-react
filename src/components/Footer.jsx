import React from 'react';
import '../styles/Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <p>copyright©Fabian Gd</p>
            <button 
                className='linkedin' 
                href="www.linkedin.com/in/fabian-gonzalez-50569124a" 
                target="_blank"
            >
                <i class="fa-brands fa-linkedin"></i>
            </button>
            
        </div>
    );
};

export default Footer;