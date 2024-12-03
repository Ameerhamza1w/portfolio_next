import { FaReact, FaNodeJs, FaPython, FaPlug, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

const SkillsPage: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-100" id="skills">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-center mb-12">
                    <span className="text-purple-600">My</span> Core Skills
                </h1>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* React */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <FaReact className="text-6xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">React</h2>
                        <p className="text-gray-700">
                            Building dynamic and responsive user interfaces with React and modern frontend tools.
                        </p>
                    </div>

                    {/* Node.js */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <FaNodeJs className="text-6xl text-green-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Node.js</h2>
                        <p className="text-gray-700">
                            Backend development with Node.js for scalable, high-performance server-side applications.
                        </p>
                    </div>

                    {/* Python */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <FaPython className="text-6xl text-yellow-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Python</h2>
                        <p className="text-gray-700">
                            Basic scripting and automation with Python for tasks like data manipulation and web scraping.
                        </p>
                    </div>

                    {/* PLC */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <FaPlug className="text-6xl text-orange-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">PLC Ladder Logic</h2>
                        <p className="text-gray-700">
                            Designing industrial automation systems with PLCs using ladder logic for process control.
                        </p>
                    </div>

                    {/* Git */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <FaGitAlt className="text-6xl text-red-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Git</h2>
                        <p className="text-gray-700">
                            Mastery in version control with Git for managing collaborative software projects.
                        </p>
                    </div>

                    {/* TypeScript */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <SiTypescript className="text-6xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">TypeScript</h2>
                        <p className="text-gray-700">
                            Leveraging TypeScript to build maintainable, robust, and scalable applications with a focus on type safety.
                        </p>
                    </div>

                    {/* Next.js */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <SiNextdotjs className="text-6xl text-gray-800 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Next.js</h2>
                        <p className="text-gray-700">
                            Optimizing web applications with Next.js for server-side rendering (SSR) and static site generation (SSG).
                        </p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <SiTailwindcss className="text-6xl text-teal-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tailwind CSS</h2>
                        <p className="text-gray-700">
                            Designing modern, responsive, and minimalist UI with Tailwind CSS using a utility-first approach.
                        </p>
                    </div>

                    {/* Jest */}
                    <div className="service-card bg-white shadow-xl rounded-lg p-8 text-center hover:bg-purple-50 transition duration-300">
                        <SiJest className="text-6xl text-green-600 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Jest</h2>
                        <p className="text-gray-700">
                            Writing unit and integration tests with Jest to ensure application reliability and quality.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
