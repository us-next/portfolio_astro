import { Link } from 'react-scroll';

export function Footer({}) {
  return (
    <footer className="px-[6.4%] pb-16">
      <div className="p-6 bg-[#f0efec] rounded-2xl">
        <h2 className="mb-16">Portfolio</h2>
        <nav>
          <ul>
            <li className="mb-2"><Link className="block py-2" to="about" smooth={true}>About</Link></li>
            <li className="mb-2"><Link className="block py-2" to="works" smooth={true}>Works</Link></li>
            <li className="mb-24"><Link className="block py-2" to="skill" smooth={true}>Skill</Link></li>
          </ul>
        </nav>
        <p className="text-xs"><small>&copy;2024 All Reserved</small></p>
      </div>
    </footer>
  )
}