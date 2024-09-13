import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../../styles/layouts/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#4267B2" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#E1306C" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="#FF0000" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="#1DA1F2" />
        </a>
      </div>
      <p className="disclaimer">Derechos reservados &copy; 2023</p>
    </footer>
  );
};

export default Footer;