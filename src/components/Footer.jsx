import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-green-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
         <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-900">WellnessVista</h3>
          <p className="text-blue-700 leading-relaxed">
            We provide high-quality medical services including cardiology, pediatrics, dermatology, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="text-blue-700 hover:text-blue-900 transition">About Us</a>
            <a href="#services" className="text-blue-700 hover:text-blue-900 transition">Services</a>
            <a href="#contact" className="text-blue-700 hover:text-blue-900 transition">Contact</a>
          </div>
        </div>

         <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Contact</h3>
          <address className="not-italic text-blue-700 space-y-1">
            <p>123 Elm Street</p>
            <p>Springfield, IL 62701</p>
            <p>Email: support@care.com</p>
            <p>Phone: +123-456-7890</p>
          </address>
        </div>

         <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">Quick Links</h3>
          <nav className="space-y-2">
            <a href="#home" className="block text-blue-700 hover:text-blue-900">Home</a>
            <a href="#about" className="block text-blue-700 hover:text-blue-900">About</a>
            <a href="#services" className="block text-blue-700 hover:text-blue-900">Services</a>
            <a href="#doctors" className="block text-blue-700 hover:text-blue-900">Doctors</a>
            <a href="#blogs" className="block text-blue-700 hover:text-blue-900">Blogs</a>
          </nav>
        </div>
      </div>

       <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-100 text-center text-blue-600 text-sm">
        <p>©  WellnessVista  2025 — All rights reserved</p>
      </div>
    </footer>
  );
};

 
