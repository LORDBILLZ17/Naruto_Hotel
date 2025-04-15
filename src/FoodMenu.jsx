import React, { useState } from 'react';
import { Foods } from './Data/Index';
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai';

const FoodMenu = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [modalData, setModalData] = useState(null);

  const categories = ['All', ...new Set(Foods.map(food => food.category))];

  const filteredFoods = Foods.filter(food => {
    const matchesSearch = food.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
    const matchesPrice = food.price >= priceRange[0] && food.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-white font-sans py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Specials</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 w-full md:w-1/3"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 w-full md:w-1/4"
          >
            {categories.map((category, idx) => (
              <option key={idx} value={category}>{category}</option>
            ))}
          </select>
          <div className="flex flex-col items-start w-full md:w-1/3">
            <label className="text-sm text-gray-700 mb-1">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="30"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
                
                {/* Info Icon */}
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  onClick={() => setModalData(item)}
                >
                  <AiOutlineInfoCircle size={24} />
                </button>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-orange-500 font-bold mb-4">${item.price}</p>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    onClick={() => addToCart(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No match Found For Your Selection.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setModalData(null)}
            >
              <AiOutlineClose size={24} />
            </button>
            <img src={modalData.img} alt={modalData.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{modalData.title}</h2>
            <p className="text-gray-700 mb-2">{modalData.desc}</p>
            <p className="text-orange-500 font-semibold text-lg">${modalData.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
