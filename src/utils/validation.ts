// Sure, here's the content for the file: /portfolio-website/src/utils/validation.ts

import { FieldValues, Resolver } from 'react-hook-form';

export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateForm: Resolver<FieldValues> = async (data) => {
    const errors: Record<string, any> = {};

    if (!data.name) {
        errors.name = { message: 'Name is required' };
    }

    if (!data.email) {
        errors.email = { message: 'Email is required' };
    } else if (!validateEmail(data.email)) {
        errors.email = { message: 'Email is not valid' };
    }

    if (!data.message) {
        errors.message = { message: 'Message is required' };
    }

    return {
        values: errors.name || errors.email || errors.message ? {} : data,
        errors,
    };
};