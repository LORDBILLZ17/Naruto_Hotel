import React from "react";
import { Damola,} from "./Data/Index";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { galleryData } from "./Data/Index";
import { MiniAbout } from "./Data/Index";
import { SpecialOffers } from "./Data/Index";
import { MerchandiseItems } from "./Data/Index";

 const Hero = () => {

  const Navigate = useNavigate ()

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(src/assets/6a76de36-c5fc-49ad-b9f0-d9d8123f7bb8.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Welcome to Bakerz Bite <br /> Bakery House
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-xl">
            We produce our breads and cakes from natural ingredients, love and passion.
          </p>
          <button onClick={() => Navigate ("/Foodmenu")} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg">
            Place Order Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 flex bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-center">
      {Damola.slice(0).map((item, index) => (
        <div
          key={index}
          className="text-center p-4 hover:shadow-xl border rounded-lg flex flex-col justify-between h-64"
        >
          <img
            src={item.img}
            alt={item.name}
            className="h-32 w-full object-cover mb-2 rounded"
          />
          <div className="w-full h-2 bg-gray-100 mb-2 rounded"></div>
          <p className="text-black">{item.Description}</p>
        </div>
      ))}
    </div>

    {/* See More Button */}
    <div className="w-full flex justify-center mt-8">
      <button 
      onClick={() => Navigate ("/Foodmenu")}
      className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg">
        See more
      </button>
    </div>
  </div>
</section>
      {/* About Us Section */}
      <section id="about" className="py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
      
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-orange-500 uppercase tracking-wide mb-2">Discover</h3>
          <h2 className="text-lg font-extrabold mb-4">About Us</h2>
          <p className="mb-6">We will in general overlook that satisfaction doesn’t originate from something we don’t have, or perceive.</p>
          <p className="mb-6">In 1995 Bakery House wandered into advancement and innovativeness and presented productive Birthday Cakes, <br />Customized Wedding Cakes and Theme Cakes according to events.</p>
          <a onClick={()=>Navigate ("/About")} href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded">Know More About Us</a>
        </div>
       
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3">
  {

  MiniAbout.map((img, index) => (
    <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="object-cover w-full h-48 rounded hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  ))}
</div>


      </div>
    </div>
  </section>

  {/* Gallery Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryData.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="w-full flex justify-center mt-8">
    <button
       onClick={() => Navigate ("/Gallery")}
      className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg">
         See more
     </button>
  </div>
</section>

      {/* Special Offers Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Special Offers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {SpecialOffers.map((offer, index) => (
        <motion.div
          key={index}
          className="bg-orange-50 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <img src={offer.img} alt={offer.title} className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">{offer.title}</h3>
            <p className="text-gray-700">{offer.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Merchandise Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Bakerz Bite Merchandise</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {MerchandiseItems.map((item, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-t-xl" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-orange-600">{item.name}</h3>
            <p className="text-gray-600 text-sm my-2">{item.description}</p>
            <span className="text-black font-bold">{item.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

          
    </div>
  );
};
export default Hero;