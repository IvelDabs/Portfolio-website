import React from 'react';
import Services from '../components/Services';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
                <Services />
            </div>
        </section>
    );
};

export default ServicesSection;