export function Btn({size, href, target, text}) {
  
  return (
    <p className={`${size} font-inter`}>
      <a href={href} className="block py-4 bg-black text-white text-center text-sm leading-none rounded-lg transition duration-300 hover:scale-90" target={target}>{text}</a>
    </p>
  )
}