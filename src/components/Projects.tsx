// Sure, here's the contents for the file: /portfolio-website/src/components/Projects.tsx

import React from 'react';
import { motion } from 'framer-motion';
import Card from './common/Card';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        details: 'Detailed summary of Project One.',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        details: 'Detailed summary of Project Two.',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        details: 'Detailed summary of Project Three.',
    },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <section className="py-16  bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                    >
                        <Card title={project.title} description={project.description}>
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-4 opacity-0 hover:opacity-100 transition-opacity">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p>{project.details}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;