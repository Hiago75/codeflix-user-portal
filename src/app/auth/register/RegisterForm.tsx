"use client";
import { AuthForm } from '@/app/components/AuthForm';
import { InputField } from '../InputField';


export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit from register');
    e.preventDefault();
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
