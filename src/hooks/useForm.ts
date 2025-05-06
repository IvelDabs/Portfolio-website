import { useEffect } from 'react';
import { useForm as useReactHookForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const useForm = (onSubmit: SubmitHandler<FormValues>) => {
  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm<FormValues>();

  const submitForm = (data: FormValues) => {
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    // Any side effects can be handled here
  }, []);

  return {
    register,
    handleSubmit: handleSubmit(submitForm),
    errors,
  };
};

export default useForm;