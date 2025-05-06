import React from 'react';
import Contact from '../components/Contact';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
            <Contact />
            </div>
        </section>
    );
};

export default ContactSection;
