import { Link } from 'react-scroll';

export function HeaderNav({onClick, className}) {
  return (
    <nav className={`absolute z-0 top-0 left-0 w-full rounded-2xl bg-white text-black overflow-hidden duration-300 transition-all ${className}`}>
      <ul>
        <li><Link onClick={onClick} className="block mb-2 px-6 py-2 cursor-pointer" to="about" smooth={true}>About</Link></li>
        <li><Link onClick={onClick} className="block mb-2 px-6 py-2 cursor-pointer" to="works" smooth={true}>Works</Link></li>
        <li><Link onClick={onClick} className="block mb-2 px-6 py-2 cursor-pointer" to="skill" smooth={true}>Skill</Link></li>
        <li><Link onClick={onClick} className="block mb-2 px-6 py-2 cursor-pointer" to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  )
}