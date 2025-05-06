// Sure, here's the contents for the file: /portfolio-website/portfolio-website/src/sections/ProjectsSection.tsx

import React from 'react';
import Projects from '../components/Projects';

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-16 px-15 md:px-20 bg-gray-50">
            <div className="container mx-auto">
                {/* <h2 className="text-3xl font-bold text-center mb-10">Projects</h2> */}
                <Projects />
            </div>
        </section>
    );
};

export default ProjectsSection;