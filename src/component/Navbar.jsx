// import React, { useState, useEffect } from 'react';


// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbars = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);
  
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'Contact', path: '/contact' }
//   ];
  
//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           Portfolio
//         </Link>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link 
//                   to={link.path}
//                   className={`text-lg font-medium transition-colors duration-300 ${
//                     location.pathname === link.path 
//                       ? 'text-blue-600'
//                       : isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-gray-800"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
      
//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white">
//           <ul className="py-4 px-4">
//             {navLinks.map((link) => (
//               <li key={link.name} className="py-2">
//                 <Link 
//                   to={link.path}
//                   className={`block text-lg font-medium transition-colors duration-300 ${
//                     location.pathname === link.path 
//                       ? 'text-blue-600'
//                       : 'text-gray-800 hover:text-blue-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
          
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbars;

import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('button[aria-label="menu"]')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-blue-600 text-2xl hover:text-gray-400 font-semibold">
                    Asov-Portfolio
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-blue-600 focus:outline-none md:hidden z-50"
                    aria-label="menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                {/* Updated Menu Section */}
                <div
                    ref={menuRef}
                    className={`md:flex md:items-center md:space-x-4 absolute md:static left-0 w-full md:w-auto
                    bg-blue-500 md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[500px] opacity-100 top-14' : 'max-h-0 opacity-0 top-[-100%] md:max-h-full md:opacity-100 md:top-0'}
                    z-40`}
                >
                    <div className="flex flex-col md:flex-row p-4 md:p-0">
                        <div className="flex flex-col md:flex-row md:mr-4">
                            <Link
                                to="about"
                                onClick={closeMenu}
                                className="py-2 px-4 text-white md:text-blue-600 hover:text-gray-400 hover:underline text-xl"
                            >
                                About
                            </Link>
                            <Link
                                to="projects"
                                onClick={closeMenu}
                                className="py-2 px-4 text-white md:text-blue-600 hover:text-gray-400 hover:underline text-xl"
                            >
                                Projects
                            </Link>
                            <Link
                                to="contact"
                                onClick={closeMenu}
                                className="py-2 px-4 text-white md:text-blue-600 hover:text-gray-400 hover:underline text-xl"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="flex justify-center md:justify-center md:items-center space-x-4 mt-4 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
                            {/* Social links with close handlers */}
                            {[
                                { icon: FaGithub, url: 'https://github.com/Otenevictor' },
                                { icon: FaTwitter, url: 'https://x.com/BlessedVictoo' },
                                { icon: FaInstagram, url: 'https://www.instagram.com/solomonotene36' },
                                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/victor-otene-26a4a023a/' }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    to={social.url}
                                    target="_blank"
                                    onClick={closeMenu}
                                    className="text-white md:text-blue-600 hover:text-gray-400"
                                >
                                    <social.icon className="text-2xl" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbars;
// flowing narbar it scrolls op with it content
