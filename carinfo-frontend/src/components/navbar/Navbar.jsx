import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition > 50 ? 'scrolled' : ''}>
      <h1>Your Logo</h1>
      <ul>
        <Link to={"/allCars"}>Cars</Link>
        <li>Home</li>
        <li>All Cars</li>
        <li>Models</li>
      </ul>
    </nav>
  );
};

export default Navbar;
