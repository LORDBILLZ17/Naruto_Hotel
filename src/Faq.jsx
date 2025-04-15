import React, { useState } from 'react';
import { faqData } from './Data/Index';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="w-full text-left flex justify-between items-center py-2 text-lg font-medium"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="text-gray-700 py-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
