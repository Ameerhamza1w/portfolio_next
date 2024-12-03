import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaPlug, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

const SkillsPage: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-100" id="skills">
            <div className="container mx-auto px-6">
                
                {/* Page Title */}
                <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
                    My <span className="text-teal-600"> Skills</span>
                </h1>

                {/* Technical Skills Section */}
                <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">Technical Skills</h2>
                
                {/* Skill Bars */}
                <div className="space-y-10">
                    {[ 
                        { icon: <FaReact className="text-5xl text-blue-500 mr-4" />, skill: 'React', percentage: '90%', color: 'bg-blue-500' },
                        { icon: <FaNodeJs className="text-5xl text-green-500 mr-4" />, skill: 'Node.js', percentage: '85%', color: 'bg-green-500' },
                        { icon: <FaPython className="text-5xl text-yellow-400 mr-4" />, skill: 'Python', percentage: '75%', color: 'bg-yellow-400' },
                        { icon: <FaPlug className="text-5xl text-orange-500 mr-4" />, skill: 'PLC Ladder Logic', percentage: '70%', color: 'bg-orange-500' },
                        { icon: <FaGitAlt className="text-5xl text-red-600 mr-4" />, skill: 'Git', percentage: '80%', color: 'bg-red-600' },
                        { icon: <SiTypescript className="text-5xl text-blue-500 mr-4" />, skill: 'TypeScript', percentage: '70%', color: 'bg-indigo-500' },
                        { icon: <SiNextdotjs className="text-5xl text-gray-800 mr-4" />, skill: 'Next.js', percentage: '60%', color: 'bg-gray-600' },
                        { icon: <SiTailwindcss className="text-5xl text-teal-400 mr-4" />, skill: 'Tailwind CSS', percentage: '65%', color: 'bg-teal-400' },
                        { icon: <SiJest className="text-5xl text-green-600 mr-4" />, skill: 'Jest', percentage: '10%', color: 'bg-green-600' },
                    ].map(({ icon, skill, percentage, color }) => (
                        <div className="flex items-center" key={skill}>
                            {icon}
                            <div className="flex-1 ml-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-medium text-gray-800">{skill}</span>
                                    <span className="font-semibold text-gray-700">{percentage}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className={`${color} h-3 rounded-full`} style={{ width: percentage }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
