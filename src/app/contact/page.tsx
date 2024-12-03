import React from "react";
import Link from 'next/link';

const ContactPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-indigo-50 to-white text-gray-800 p-12 space-y-16 rounded-lg shadow-lg">

      {/* Header Section */}
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-extrabold text-indigo-600">
          Get in <span className="text-gray-800">Touch</span>
        </h2>
        <p className="text-lg text-gray-600">
          Let’s work together to create something amazing!
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">

        {/* Contact Information Section */}
        <div className="lg:w-1/2 bg-indigo-600 p-8 rounded-lg shadow-md space-y-6 text-white">
          <h3 className="text-3xl font-semibold">Contact</h3>
          <p>
            Reach out via email or phone, or connect with me on social media.
          </p>

          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <i className="bx bxs-envelope mr-3 text-xl" />
              hamzamemon6767@gmail.com
            </li>
            <li className="flex items-center">
              <i className="bx bxs-phone mr-3 text-xl" />
              0322-3150906
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <Link href="https://github.com/Ameerhamza1w" className="hover:underline">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/ameerhamzamemon" className="hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
