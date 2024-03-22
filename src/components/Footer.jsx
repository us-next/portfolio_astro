import { Link } from 'react-scroll';

export function Footer({ }) {
  return (
    <footer className="px-[6.4%] md:px-[3%] pb-16 font-semibold font-inter">
      <div className="p-6 md:p-20 bg-[#f0efec] rounded-2xl">
        <div className="md:flex md:items-center md:gap-x-24 md:mb-28">
          <h2 className="mb-16 md:mb-0">Portfolio</h2>
          <nav>
            <ul className="md:flex md:gap-x-16">
              <li className="mb-2 md:mb-0"><Link className="block py-2 md:px-2 cursor-pointer" to="about" smooth={true}>About</Link></li>
              <li className="mb-2 md:mb-0"><Link className="block py-2 md:px-2 cursor-pointer" to="works" smooth={true}>Works</Link></li>
              <li className="mb-24 md:mb-0"><Link className="block py-2 md:px-2 cursor-pointer" to="skill" smooth={true}>Skill</Link></li>
            </ul>
          </nav>
        </div>
        <p className="text-xs"><small>&copy;2024 All Reserved</small></p>
      </div>
    </footer>
  )
}