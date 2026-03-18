import React from 'react'
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>

            <h2 className="text-2xl font-bold text-white mb-4">
              PAREKH TEXTILE CHAMBER
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Parekh Textile Chamber is dedicated to delivering premium textile solutions
              with advanced manufacturing techniques, innovative designs, and a commitment
              to quality and sustainability.
            </p>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>BENGALURU, KARNATAK INDIA</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 1111 1111</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@parekhtextile.com</span>
              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">About Chamber</li>
              <li className="hover:text-red-500 cursor-pointer">Our Services</li>
              <li className="hover:text-red-500 cursor-pointer">Industries</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Our Expertise
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer">
                Textile Manufacturing
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Fabric Processing
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Custom Textile Solutions
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Export & Supply Chain
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                Quality Assurance
              </li>
            </ul>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-5">
              Get the latest updates from Parekh Textile Chamber and industry insights.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 text-white outline-none"
              />

              <button className="bg-red-500 px-5 font-semibold hover:bg-red-600 transition">
                Send
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Parekh Textile Chamber. All Rights Reserved.

        </div>

      </footer>
    </>
  )
}

export default Footer;
