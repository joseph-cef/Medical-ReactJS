import React from "react";
import Button from "../layouts/Button";
import { FaFlask, FaHeartbeat, FaStethoscope } from "react-icons/fa"; // أيقونات من react-icons

export function Services() {
  const services = [
    {
      icon: <FaFlask className="text-4xl text-blue-600 mb-4" />,
      title: "Lab Test",
      desc: "High-quality lab testing with quick results and full diagnostics.",
    },
    {
      icon: <FaStethoscope className="text-4xl text-blue-600 mb-4" />,
      title: "Health Check",
      desc: "Regular checkups and personalized preventive care for all ages.",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-blue-600 mb-4" />,
      title: "Heart Health",
      desc: "Advanced cardiology services to monitor and protect your heart.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="services">
       <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a wide range of medical services tailored to your health needs.
          </p>
        </div>
        <div>
          <Button title="See Services" />
        </div>
      </div>

       <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 text-center"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.desc}</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
