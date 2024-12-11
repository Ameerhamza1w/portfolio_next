// app/services/page.tsx

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

const ServicesPage = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-teal-100" id="services">
            <div className="container mx-auto px-6">
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-center mb-12">
                    <span className="text-teal-600">My</span> Services
                </h1>

                {/* Services Flexbox Layout */}
                <div className="flex flex-wrap justify-center gap-8">
                    
                    {/* HTML */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaHtml5 className="text-6xl text-orange-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">HTML</h2>
                        <p className="text-gray-700">
                            Building the structural foundation of web applications with semantic HTML.
                        </p>
                    </div>

                    {/* CSS */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaCss3Alt className="text-6xl text-blue-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">CSS</h2>
                        <p className="text-gray-700">
                            Styling websites for responsive, visually appealing, and consistent design.
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaJs className="text-6xl text-yellow-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">JavaScript</h2>
                        <p className="text-gray-700">
                            Creating interactive functionality and enhancing user experience.
                        </p>
                    </div>

                    {/* React */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaReact className="text-6xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">React</h2>
                        <p className="text-gray-700">
                            Building dynamic, responsive, and high-performance user interfaces with React.
                        </p>
                    </div>

                    {/* Node.js */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaNodeJs className="text-6xl text-green-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Node.js</h2>
                        <p className="text-gray-700">
                            Backend development for scalable, high-performance server-side applications.
                        </p>
                    </div>

                    {/* Python */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <FaPython className="text-6xl text-yellow-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Python</h2>
                        <p className="text-gray-700">
                            Scripting and automation with Python for various applications.
                        </p>
                    </div>

                    {/* TypeScript */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <SiTypescript className="text-6xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">TypeScript</h2>
                        <p className="text-gray-700">
                            Building maintainable and scalable applications with strong type safety.
                        </p>
                    </div>

                    {/* Next.js */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <SiNextdotjs className="text-6xl text-gray-800 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Next.js</h2>
                        <p className="text-gray-700">
                            Optimizing web apps with server-side rendering (SSR) and static site generation (SSG).
                        </p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <SiTailwindcss className="text-6xl text-teal-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tailwind CSS</h2>
                        <p className="text-gray-700">
                            Designing modern, responsive, and minimalist UI with utility-first CSS.
                        </p>
                    </div>

                    {/* Jest */}
                    <div className="service-card bg-white shadow-lg rounded-lg p-8 text-center w-80 hover:bg-teal-50 transition duration-300">
                        <SiJest className="text-6xl text-green-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Jest</h2>
                        <p className="text-gray-700">
                            Writing reliable unit and integration tests to ensure app quality.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
