export function Btn({onClick, size, hidden, href, target, text}) {
  
  return (
    <p className={`${size} ${hidden} font-inter`}>
      <a 
      onClick={onClick} href={href} className="block py-4 bg-black text-white text-center text-sm leading-none rounded-lg transition cursor-pointer duration-300 hover:scale-90" target={target}>{text}</a>
    </p>
  )
}