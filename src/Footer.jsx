import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-2xl font-bold mb-4">Bakerz Bite</h2>
          <p className="text-sm">
            Baked with passion. Loved by all. We make every bite a moment of joy.
          </p>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-200">Home</Link></li>
            <li><Link to="/About" className="hover:text-yellow-200">About Us</Link></li>
            <li><Link to="/Foodmenu" className="hover:text-yellow-200">Menu</Link></li>
            <li><Link to="/Contact" className="hover:text-yellow-200">Contact</Link></li>
            <li><Link to="/Review" className="hover:text-yellow-200">Review</Link></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">123 Bread Street, Dough City, Yumland</p>
          <p className="text-sm mb-4">Phone: +123 456 7890</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-200"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-200"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-200"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-orange-300 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Bakerz Bite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

