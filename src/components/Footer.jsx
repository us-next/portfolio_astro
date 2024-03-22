export function Footer({}) {
  return (
    <footer className="px-[6.4%] pb-16">
      <div className="p-6 bg-[#f0efec] rounded-2xl">
        <h2 className="mb-16">Portfolio</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="#about" className="block py-2">About</a></li>
            <li className="mb-2"><a href="#works" className="block py-2">Works</a></li>
            <li className="mb-24"><a href="#skill" className="block py-2">Skill</a></li>
          </ul>
        </nav>
        <p className="text-xs"><small>&copy;2024 All Reserved</small></p>
      </div>
    </footer>
  )
}