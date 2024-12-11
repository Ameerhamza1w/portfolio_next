import React from 'react';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50" id="projects">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
            A showcase of some of the projects I’ve worked on, crafted with passion and precision.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

          {/* Project 1: Resume Builder */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">Resume Builder</h3>
            <Image
              src="/resume.png"
              alt="Resume Builder"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A professional Resume Builder web app where users can create and customize resumes easily. Built with React and Tailwind CSS, it allows for downloadable formats.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://milestone-4-editable-resume-by-ameer-hamza.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View Live &rarr;
              </a>
              <a
                href="https://github.com/Ameerhamza1w/milestone4editableresumebyAmeerHamza.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Project 2: E-commerce Website */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">E-commerce Website</h3>
            <Image
              src="/ss.PNG"
              alt="E-commerce Website"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              An e-commerce platform built using Next.js. This project allows users to browse products, add to the cart, and proceed with checkout functionalities.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://hackathon-2-cawt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View Live &rarr;
              </a>
              <a
                href="https://github.com/Ameerhamza1w/hackathon-2.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Project 3: Todo List */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">Todo List</h3>
            <Image
              src="/todo.PNG"
              alt="Todo List Project"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A simple and user-friendly Todo List application built with Next.js and Tailwind CSS. It allows users to manage tasks effectively and stay organized with reminders for scheduled tasks.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://todo-app-kappa-gilt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View Live &rarr;
              </a>
              <a
                href="https://github.com/Ameerhamza1w/Todo_App.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Project 4: CLI ATM Simulation */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">CLI ATM Simulation</h3>
            <Image
              src="/atm.png" 
              alt="CLI ATM Simulation"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A command-line interface (CLI) based ATM simulation that allows users to check balance, deposit, withdraw, and transfer funds in a simulated environment. Developed using Python.
            </p>
            <a
              href="https://github.com/Ameerhamza1w/ameer-hamza-cli-atm-machine.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-500 hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>

          {/* Project 5: CLI Currency Converter */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">CLI Currency Converter</h3>
            <Image
              src="/cu.png"
              alt="CLI Currency Converter"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A command-line interface (CLI) based currency converter built using Java. This tool allows users to convert between different currencies using live exchange rates (API integrated).
            </p>
            <a
              href="https://github.com/Ameerhamza1w/Cli-Currency-Converter.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-500 hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>

          {/* Project 6: CLI Java Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">CLI Java Calculator</h3>
            <Image
              src="/cal.png" 
              alt="CLI Java Calculator"
              width={400}
              height={300}
              className="rounded-md w-full h-auto"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A command-line interface (CLI) based calculator developed in Java. This tool supports basic operations like addition, subtraction, multiplication, and division, with a simple user interface in the terminal.
            </p>
            <a
              href="https://github.com/Ameerhamza1w/Simple-Calculator.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-500 hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
