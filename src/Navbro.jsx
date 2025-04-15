import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import Ticker from './Ticker';
import { FaCartPlus, FaUser } from 'react-icons/fa';
const Navbro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [visitorCount, setVisitorCount] = useState(0);

  // Increment visitor count (local tracking)
  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("visitorCount", newCount);
    setVisitorCount(newCount);
  }, []);


  return (
    <>
      {/* Navbar */}
      <nav className='bg-orange-500 fixed top-0 left-0 w-full shadow-md z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-24'>

            {/* Logo */}
            <Link to="/" className='flex items-center gap-2 ml-6'>
              <img
                src="/92f1cc02-33c9-4d90-a769-81922395c293.jpg"
                alt="Logo"
                className='w-16 h-16 rounded-full object-cover'
              />
              <span className='text-white font-bold text-2xl hidden sm:inline'>Bakerz Bite</span>

                  {/* Visitor Counter */}
             <div className="absolute bottom-1 left-1 text-white text-xs sm:text-sm bg-black bg-opacity-30 sm:bg-none px-1 py-1 rounded-full">
                  👀Visitors: {visitorCount}
            </div>
            </Link>
            

            {/* Desktop Links */}
            <ul className='hidden md:flex space-x-8 text-white font-medium text-lg'>
              <li><Link to="/" className='hover:text-orange-300 transition'>Home</Link></li>
              <li><Link to="/Foodmenu" className='hover:text-orange-300 transition'>Menu</Link></li>
              <li><Link to="/About" className='hover:text-orange-300 transition'>About</Link></li>
              <li><Link to="/Review" className='hover:text-orange-300 transition'>Review</Link></li>
              <li><Link to="/Contact" className='hover:text-orange-300 transition'>Contact</Link></li>
              <li><Link to="/Gallery" className='hover:text-orange-300 transition'>Gallery</Link></li>
              
              <Link to="/Login" ><button className="bg-white text-black px-2 py-2 rounded hover:bg-orange-200 w-28 ">
                    Login
                  </button></Link>
           
            </ul>
           
        

                  <li><Link to="/MyAccount"><FaUser color='white' size={20} style={{ marginLeft: 'auto' }} /></Link></li>
              <li><Link to="/Cart" ><FaCartPlus color='white' size={20} style={{ marginLeft: 'auto' }} /></Link></li>
            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className='md:hidden 8bg-orange-500'>
            <ul className='flex flex-col space-y-4 px-6 py-4 text-white font-medium text-lg'>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/Review" onClick={() => setIsOpen(false)}>Review</Link></li>
              <li><Link to="/Foodmenu" onClick={() => setIsOpen(false)}>Food Menu</Link></li>
              <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
              <li><Link to="/Gallerys" onClick={() => setIsOpen(false)}>Gallery</Link></li>
              <li><Link className='w-32 bg-white text-black px-2 py-2 rounded hover:bg-orange-200' to="/Login" onClick={() => setIsOpen(false)}>Login</Link></li>
            </ul>
          </div>
        )}
      </nav>
      {/* Spacer for fixed nav */}
      <div className='h-24'></div>

      {/* Bottom Ticker */}
      <Ticker />
    </>
  );
};

export default Navbro;


