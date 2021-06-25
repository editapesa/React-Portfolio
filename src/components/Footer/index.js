import React from 'react';
import PicOfMe from '../../assets/PicOfMe.jpg';
import './style.css';

function Footer() {
    return (
        <footer className="footer text-center p-3 fixed-bottom">
            <img src={PicOfMe} alt="edita pic" />
        </footer>
    );
}

export default Footer;