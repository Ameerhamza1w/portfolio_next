import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="leading-relaxed">
            I enjoy designing scalable and impactful digital solutions. Every challenge is an opportunity to learn, and I’m always open to collaboration!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            {['About', 'Projects', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Connected</h2>
          <div className="flex justify-center md:justify-end space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/ameerhamzamemon"
              className="hover:text-blue-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Ameerhamza1w"
              className="hover:text-gray-100 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="tel:03223150906"
              className="hover:text-green-400 transition duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="mailto:hamzamemon6767@gmail.com"
              className="hover:text-red-400 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Ameer Hamza Memon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
