import { mono } from '@/lib/font';
import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button = ({ text, onClick, className = '' }: ButtonProps) => {
  return (
    <React.Fragment>
      <button
        className={`
        z-10
        ${className} ${mono.className} 
        py-2 rounded-md w-[330px] 
        dark:bg-white dark:text-[#0e0e0e]
        bg-[#0e0e0e] text-white
        border
        dark:hover:bg-black dark:hover:text-[#fff] dark:border-[#fff] 
        hover:bg-white hover:text-[#0e0e0e] border-[#0e0e0e]
        
        transition-all delay-75 duration-300
        ease-in-out

      `}
        onClick={onClick}
      >
        {text}
      </button>
    </React.Fragment>
  );
};
