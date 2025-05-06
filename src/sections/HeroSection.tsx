import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
            </motion.div>
        </section>
    );
};

export default HeroSection;