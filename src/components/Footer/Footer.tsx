import React from 'react';
import './Footer.css';
import { FaGithubAlt, FaLinkedinIn, FaEnvelope, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleMail = () => {
    window.open('mailto:tarunkethwalia18@gmail.com');
  }

  const handleUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className='footer-holder'>
      <FaArrowUp className='footer-icons' onClick={handleScrollTop} />
      <div className="footer-icons-holders">
        <FaInstagram className='footer-icons' onClick={() => handleUrl('https://www.instagram.com/tarun_kethwalia18/')} />
        <FaLinkedinIn className='footer-icons' onClick={() => handleUrl('https://www.linkedin.com/in/tarun-kethwalia-a908b6171/')} />
        <FaGithubAlt className='footer-icons' onClick={() => handleUrl('https://github.com/tarunkethwalia')} />
        <FaEnvelope className='footer-icons' onClick={handleMail} />
      </div>
      <p className='footer-initials'>Tarun Kethwalia @ {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer;