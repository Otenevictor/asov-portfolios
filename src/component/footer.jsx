//src/app.jsx

import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gray-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center">
            <Link to="/">
          <h1 className="text-2xl font-bold">Asov-dev</h1>
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +234 810 390 5225  </p>
          <p>Email: solomonotene36@gmail.com</p>
          <p>Address: Abuja, Nigeria</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Otenevictor" target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl 
                            hover:text-gray-300" />
            </a>
            <a href="https://x.com/BlessedVictoo" target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href=": https://www.instagram.com/solomonotene36" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/victor-otene-26a4a023a/" target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="/contact" className="hover:underline">
              Web Development</a></li>
            <li><a href="/about" className="hover:underline">
              Soft & hardware installation</a></li>
            <li><a href="/about" className="hover:underline">
              Data Processing</a></li>
          </ul>
        </div>

      </div>
      <p className="flex justify-center text-gray-400 text-sm p-4">
              © {currentYear} Otene Victor. All rights reserved.
            </p>
    </footer>
  );
};

export default Footer;
