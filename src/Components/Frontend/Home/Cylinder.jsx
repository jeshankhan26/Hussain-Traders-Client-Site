import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cylinder = () => {
  const [cylinders, setCylinders] = useState([]);

  useEffect(() => {
    fetch("/cylinders.json")
      .then((res) => res.json())
      .then((data) => {
        // Show only last 8 items
        const lastEight = data.slice(-8);
        setCylinders(lastEight);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-10 lg:px-20 xl:px-32 relative overflow-hidden">

      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 drop-shadow-lg"
        >
          Premium LPG Cylinders for Your Kitchen 🔥
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Reliable, Safe & Stylish — our LPG cylinders are engineered for performance and peace of mind. 
          Upgrade your kitchen with quality you can trust.
        </motion.p>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 opacity-30 blur-3xl rounded-full"></div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center relative z-10">
        {cylinders.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-md border border-blue-200 hover:shadow-xl transition-all duration-500 hover:scale-105 w-full sm:w-72 overflow-hidden"
          >
            {/* Status Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-md">
              {item.status}
            </div>

            {/* Image */}
            <figure className="overflow-hidden rounded-t-3xl">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="p-5 sm:p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800">{item.name}</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Capacity: <span className="font-semibold">{item.capacity}</span>
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Safety Rating: <span className="font-semibold text-green-600">{item.safetyRate}</span>
              </p>
              
              <div className="mt-3 mb-5">
                <span className="text-xl sm:text-2xl font-extrabold text-blue-700">
                  ৳{item.price}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cylinder;
