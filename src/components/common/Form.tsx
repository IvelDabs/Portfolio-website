import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <input
              {...field}
              id="name"
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your Name"
            />
          )}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Email is not valid' } }}
          render={({ field }) => (
            <input
              {...field}
              id="email"
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Your Email"
            />
          )}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: 'Message is required' }}
          render={({ field }) => (
            <textarea
              {...field}
              id="message"
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Your Message"
              rows={4}
            />
          )}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
    </form>
  );
};

export default Form;