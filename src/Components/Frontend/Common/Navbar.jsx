import { NavLink } from "react-router-dom";

// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="flex items-center gap-2 text-2xl font-extrabold text-[#1E3A8A] tracking-wide">
          <span className="bg-[#F97316] text-white px-2 py-1 rounded-full text-xl shadow-md">
            <img src="https://i.ibb.co.com/v6wf2gwq/12-KG-CYLINDER.png" className="w-7" alt="" srcset="" />
          </span>
          Hussain Traders
        </a>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-[#111827] space-x-2">
          <li>
            <NavLink to="/" className="px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#1E3A8A] hover:bg-[#F9FAFB]">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cylinder" className="px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#F97316] hover:bg-[#F9FAFB]">
              Cylinders
            </NavLink>
          </li>
          <li>
            <NavLink to="/safety" className="px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#F97316] hover:bg-[#F9FAFB]">
              Safety
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="px-3 py-2 rounded-lg transition-colors duration-300 hover:text-[#1E3A8A] hover:bg-[#F9FAFB]">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="hidden lg:flex ml-4">
        <button className="btn bg-[#16A34A] hover:bg-green-700 text-white font-bold rounded-full px-6 border-none shadow-md transition duration-300">
          Order Now
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost text-[#1E3A8A] text-2xl"
        >
          ☰
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-white rounded-xl w-56 font-semibold text-[#111827] space-y-1"
        >
          <li>
            <NavLink to="/" className="hover:text-[#1E3A8A] transition-colors">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cylinder" className="hover:text-[#F97316] transition-colors">Cylinders</NavLink>
          </li>
          <li>
            <NavLink to="/safety" className="hover:text-[#F97316] transition-colors">Safety</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#1E3A8A] transition-colors">Contact</NavLink>
          </li>
          <li>
            <button className="btn bg-[#16A34A] hover:bg-green-700 text-white font-bold rounded-full border-none mt-2">
              Order Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
