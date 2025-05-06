import { motion } from 'framer-motion';

export const fadeIn = (direction = 'up', duration = 0.5) => {
  return {
    initial: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (direction = 'left', duration = 0.5) => {
  return {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};