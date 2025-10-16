import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-white via-blue-100 to-blue-500 flex items-center justify-center overflow-hidden">
      
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Content */}
      <div className="hero-content flex-col lg:flex-row-reverse z-10 text-gray-800 px-6 lg:px-20">
        
        {/* Image with animation */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://i.ibb.co.com/mVVhrNxP/8816656-removebg-preview.png"
          alt="Hero Visual"
          className="max-w-sm rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
        />

        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-5 text-center lg:text-left"
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-lg">
            Power Your Kitchen with Safe & Reliable Cooking Gas 🔥
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cook with confidence using our high-quality gas cylinders. We ensure maximum safety, long-lasting performance, and quick doorstep delivery for every home.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              Get Started
            </button>
            <button className="btn border-2 border-blue-700 text-blue-700 bg-transparent hover:bg-blue-700 hover:text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
