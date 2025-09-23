import React from 'react';
import Navbar from '../../Components/Frontend/Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Frontend/Common/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
