import { Link } from 'react-scroll';

export function HeaderPcNav({}) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        <li><Link className="block px-6 py-2 cursor-pointer" to="about" smooth={true}>About</Link></li>
        <li><Link className="block px-6 py-2 cursor-pointer" to="works" smooth={true}>Works</Link></li>
        <li className="mr-36"><Link className="block px-6 py-2 cursor-pointer" to="skill" smooth={true}>Skill</Link></li>
        <li><Link className="block px-6 py-2 cursor-pointer bg-pink text-white rounded-xl" to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  )
}