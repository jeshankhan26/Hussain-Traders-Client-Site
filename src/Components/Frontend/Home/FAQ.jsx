import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Are your LPG cylinders safe to use?",
    answer:
      "Yes! All our LPG cylinders are manufactured with high-quality steel and undergo rigorous safety checks. Each cylinder comes with a safety certificate.",
  },
  {
    id: 2,
    question: "What sizes of LPG cylinders are available?",
    answer:
      "We offer multiple capacities including 12 kg, 14 kg, and 15 kg cylinders suitable for both household and commercial kitchens.",
  },
  {
    id: 3,
    question: "Do you offer home delivery?",
    answer:
      "Absolutely! We provide fast and reliable home delivery within our service areas. Delivery charges vary depending on your location.",
  },
  {
    id: 4,
    question: "How can I check the safety rating of a cylinder?",
    answer:
      "Each cylinder comes with a visible safety rating and certification. You can also find detailed information on our product cards.",
  },
  {
    id: 5,
    question: "Can I return a cylinder if there’s a defect?",
    answer:
      "Yes. In case of any manufacturing defect or safety issue, you can return the cylinder within 7 days for a replacement.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 xl:px-32 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Get answers to the most common questions about our LPG cylinders.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            className="bg-white rounded-2xl shadow-md border border-blue-200 overflow-hidden"
            layout
            initial={{ borderRadius: 20 }}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left p-5 sm:p-6 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-semibold text-blue-800">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                className="text-blue-600 text-2xl font-bold"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {activeId === faq.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-700 text-base sm:text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
