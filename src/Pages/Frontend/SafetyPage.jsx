import React, { useState } from "react";
import { motion } from "framer-motion";

const safetyFaqs = [
  {
    id: 1,
    question: "How should I store LPG cylinders safely?",
    answer:
      "Always store LPG cylinders in an upright position, in a well-ventilated area, away from heat sources, direct sunlight, or electrical appliances.",
  },
  {
    id: 2,
    question: "What should I do if I smell gas?",
    answer:
      "Do not ignite any flame, switch off all electrical appliances, ventilate the area, and immediately inform your gas supplier.",
  },
  {
    id: 3,
    question: "Can I use damaged cylinders?",
    answer:
      "No. Never use a cylinder that is rusted, dented, or leaking. Replace it immediately with a certified cylinder.",
  },
  {
    id: 4,
    question: "How often should I check the safety valve?",
    answer:
      "Check the safety valve before each use. If it appears damaged or blocked, do not use the cylinder and contact your supplier.",
  },
  {
    id: 5,
    question: "Is it safe to transport cylinders in vehicles?",
    answer:
      "Yes, but always keep them upright, secure them properly, and ensure the vehicle is ventilated.",
  },
];

const SafetyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-4 sm:px-10 lg:px-20 xl:px-32 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-cyan-400 drop-shadow-lg"
        >
          Safety FAQs 🔒
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-700 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Your safety is our top priority. Read these frequently asked questions to learn how to handle LPG cylinders safely.
        </motion.p>
      </div>

      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-green-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 opacity-30 blur-3xl rounded-full"></div>

      {/* FAQ Accordion */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        {safetyFaqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-green-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-semibold text-green-800">{faq.question}</span>
              <span className="text-green-600 font-bold text-2xl">
                {openFaq === faq.id ? "-" : "+"}
              </span>
            </button>
            {openFaq === faq.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 text-gray-700 text-sm sm:text-base"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SafetyPage;
