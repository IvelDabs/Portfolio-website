// Sure, here's the content for the file: /portfolio-website/portfolio-website/src/sections/SkillsSection.tsx

import React from 'react';
import Skills from '../components/Skills';

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
                <Skills />
            </div>
        </section>
    );
};

export default SkillsSection;