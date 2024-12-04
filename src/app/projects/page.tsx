import React from 'react';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50" id="projects">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800">
            My Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A showcase of some of the projects I’ve worked on, crafted with passion and precision.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
          
          {/* Project 1: Todo List */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Todo List</h3>
            <Image
              src="/todo.PNG"
              alt="Todo List Project"
              width={400}
              height={300}
              className="rounded-md"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A simple and user-friendly Todo List application built with Next.js and Tailwind CSS. It
              allows users to manage tasks effectively and stay organized and gives reminders when a task is scheduled.
            </p>
            <a
              href="https://todo-app-kappa-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-500 hover:underline"
            >
              View on GitHub &rarr;
            </a>
          </div>

          {/* Project 2: CLI ATM Simulation */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">CLI ATM Simulation</h3>
            <Image
              src="/atm.png" 
              alt="CLI ATM Simulation"
              width={400}
              height={300}
              className="rounded-md"
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

          {/* Project 3: CLI Currency Converter */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">CLI Currency Converter</h3>
            <Image
              src="/cu.png"
              alt="CLI Currency Converter"
              width={400}
              height={300}
              className="rounded-md"
            />
            <p className="mt-4 text-gray-600 leading-relaxed">
              A command-line interface (CLI) based currency converter built using java. This tool allows users to convert between different currencies using live exchange rates (API integrated).
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

          {/* Project 4: CLI Java Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">CLI Java Calculator</h3>
            <Image
              src="/cal.png" 
              alt="CLI Java Calculator"
              width={400}
              height={300}
              className="rounded-md"
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
