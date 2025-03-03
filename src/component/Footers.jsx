import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">Portfolio</Link>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate Frontend Developer building modern and responsive web applications
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={22} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;