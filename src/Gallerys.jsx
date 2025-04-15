import React from "react";
import { images } from "./Data/Index";

const Gallerys = () => {
  return (
    <section className="py-20 bg-white relative z-10" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Sweet Creations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl group relative z-10"
            >
              {/* Render image or video depending on type */}
              {item.type === "video" ? (
                <iframe
                  src={item.src}
                  title={`Video ${index + 1}`}
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={item.img}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallerys;
