import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to place a custom order? We’d love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Bakery Info */}
          <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Bakery Info</h3>
            <p className="mb-2">
              📍 <strong>Address:</strong> 123 Sweet St, Cupcake City, CA 90210
            </p>
            <p className="mb-2">
              📞 <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-2">
              ✉️ <strong>Email:</strong> bilal@lordbillzbakery.com
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Open Daily: 7am – 6pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
