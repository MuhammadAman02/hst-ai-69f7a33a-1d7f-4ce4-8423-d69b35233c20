import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-deep-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">InnovateTech</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-light-blue">Home</Link></li>
          <li><Link to="/about" className="hover:text-light-blue">About</Link></li>
          <li><Link to="/services" className="hover:text-light-blue">Services</Link></li>
          <li><Link to="/contact" className="hover:text-light-blue">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;