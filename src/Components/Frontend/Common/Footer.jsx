// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Hussain Traders is committed to delivering safe, reliable, and
            eco-friendly LPG gas cylinders. Our focus is on energy efficiency,
            safety, and sustainability for every home and business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-[#F97316] transition-colors">Home</a>
            </li>
            <li>
              <a className="hover:text-[#16A34A] transition-colors">Categories</a>
            </li>
            <li>
              <a className="hover:text-[#F97316] transition-colors">Cylinders</a>
            </li>
            <li>
              <a className="hover:text-[#16A34A] transition-colors">Safety</a>
            </li>
            <li>
              <a className="hover:text-[#F97316] transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📧 info@hussaintraders.com</p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm font-bold mt-3 text-[#F97316]">
            🚨 Emergency Helpline: 999
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-lg">
            <a className="hover:text-[#F97316] transition-colors">🌐</a>
            <a className="hover:text-[#16A34A] transition-colors">📘</a>
            <a className="hover:text-[#F97316] transition-colors">🐦</a>
            <a className="hover:text-[#16A34A] transition-colors">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Hussain Traders. All rights reserved.
      </div>
    </footer>
  );
}
