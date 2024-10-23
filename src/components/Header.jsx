import { useState } from "react";
import { Link } from "react-scroll";
import { BurgerButton } from "./BurgerButton"
import { HeaderNav } from "./HeaderNav"
import { HeaderPcNav } from './HeaderPcNav';

export function Header({}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen ? 'closed' : 'open');
  };
  
  return (
    <header className="fixed top-[7vh] md:top-[4vh] left-1/2 z-30 flex lg:justify-between lg:items-center gap-3 w-[87.2%] md:w-[94.4%] lg:w-[800px] p-6 rounded-2xl translate-x-[-50%] bg-white bg-opacity-50 backdrop-blur-sm shadow-md font-inter">
      <BurgerButton onClick={toggleNav} />
      <h1 className="relative z-10 text-black font-bold"><Link className="cursor-pointer" to="mv" smooth={true}>Portfolio</Link></h1>
      <HeaderNav onClick={toggleNav} className={isOpen ? 'pt-20 pb-4' : 'h-0 py-0'} />
      <HeaderPcNav />
    </header>
  )
}