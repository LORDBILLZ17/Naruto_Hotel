import React from 'react';


const About = () => {



  return (
    <div className="pt-28 pb-16 px-4 sm:px-10 lg:px-20 bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Our Bakery</h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <span className="font-semibold text-orange-600">Bakerz Bite</span> — where every bite tells a story.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        <img
          src="/man cooking.avif"
          alt="Bakery"
          className="rounded-2xl shadow-lg w-full object-cover h-80"
        />

        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-3">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since opening our doors in 2025, Bakerz Bite has been the heart of the community — serving freshly baked breads, cakes, cookies, and pastries made with love and tradition.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re picking up your daily loaf or celebrating life’s sweetest moments, we’re honored to be part of your table. We bake with heart, heritage, and a hint of vanilla.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Why Choose Sweet Crumbs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div  className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">🍞 Handmade Daily</h3>
            <p className="text-gray-700">Every item is baked fresh each morning — no shortcuts, just quality.</p>
          </div>
          <div  className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">🎂 Custom Creations</h3>
            <p className="text-gray-700">From wedding cakes to birthday treats, we turn your vision into sweet reality.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">🌸 Locally Sourced</h3>
            <p className="text-gray-700">We support local farms and use seasonal ingredients to create honest flavors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
