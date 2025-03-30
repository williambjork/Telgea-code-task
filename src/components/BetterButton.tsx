'use client';

import React from 'react';

interface ButtonProps {
  onClick: () => void;  
  text?: string;        
  className?: string;   
}

export function BetterButton({ 
  onClick, 
  text = "Click me", 
  className = ""     
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#0000FF] text-white px-4 py-2  hover:bg-[#2C2CFF] cursor-pointer
        transition-colors ${className}`}
    >
      {text}
    </button>
  );
} 

//Improvements:

// Using tailwind instead of inline styling
// Changed click prop name to onClick
// Added default value for text prop
// Added className prop for easy customization
// Consistent spacing and formatting
// Added hover effect
// Added cursor pointer on hover
// Added Typescript interface 
