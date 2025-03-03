import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path 
                      ? 'text-blue-600'
                      : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <Link 
                  to={link.path}
                  className={`block text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path 
                      ? 'text-blue-600'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
           <div>
                              <div className="flex space-x-4">
                                  <Link to="https://github.com/Otenevictor" target="_blank"
                                      rel="noopener noreferrer">
                                      <FaGithub className="text-white text-2xl 
                                                      hover:text-gray-300" />
                                  </Link>
                                  <Link to="https://x.com/BlessedVictoo" target="_blank"
                                      rel="noopener noreferrer">
                                      <FaTwitter className="text-white text-2xl
                                                      hover:text-gray-300" />
                                  </Link>
                                  <Link to=": https://www.instagram.com/solomonotene36" target="_blank"
                                      rel="noopener noreferrer">
                                      <FaInstagram className="text-white text-2xl
                                                      hover:text-gray-300" />
                                  </Link>
                                  <Link to="https://www.linkedin.com/in/victor-otene-26a4a023a/" target="_blank"
                                      rel="noopener noreferrer">
                                      <FaLinkedin className="text-white text-2xl
                                                      hover:text-gray-300" />
                                  </Link>
                              </div>
                          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbars;