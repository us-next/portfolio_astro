export function Btn({size, text}) {
  
  return (
    <p className={`${size} font-inter`}>
      <a href="#" className="block py-4 bg-black text-white text-center text-sm leading-none rounded-lg">{text}</a>
    </p>
  )
}