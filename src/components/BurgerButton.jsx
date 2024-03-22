import React from 'react';

export function BurgerButton({ onClick }) {
  return (
    <button onClick={onClick} className="relative z-10 flex justify-center items-center w-6 h-6">
      <span className="absolute translate-y-[-5px] block w-3.5 h-px bg-black"></span>
      <span className="absolute block w-3.5 h-px bg-black"></span>
      <span className="absolute translate-y-[5px] block w-3.5 h-px bg-black"></span>
    </button>
  )
}