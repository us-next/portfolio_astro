import { useState } from 'react';
import { BurgerButton } from "./BurgerButton"
import { HeaderNav } from "./HeaderNav"

export function Header({}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen ? 'closed' : 'open');
  };
  
  return (
    <header className="fixed top-[7vh] md:top-[4vh] left-1/2 z-30 flex gap-3 w-[87.2%] md:w-[94.4%] p-6 rounded-2xl translate-x-[-50%] bg-white bg-opacity-50 shadow-md font-inter">
      <BurgerButton onClick={toggleNav} />
      <h1 className="relative z-10 font-bold"><a href="/index.html">Portfolio</a></h1>
      <HeaderNav onClick={toggleNav} className={isOpen ? 'pt-20 pb-4' : 'h-0 py-0'} />
    </header>
  )
}