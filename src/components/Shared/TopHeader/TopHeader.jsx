import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:drnikhilagnihotri@gmail.com">drnikhilagnihotri</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 1234567890">+91 1234567890</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="#" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="facebook"><FaFacebookSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                    <a href="#" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;