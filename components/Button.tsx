import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-lime-400 to-green-500 text-black hover:from-lime-300 hover:to-green-400 glow-button",
    secondary: "bg-purple-600 text-white hover:bg-purple-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
