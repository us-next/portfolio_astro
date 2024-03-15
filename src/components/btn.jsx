//ボタン横幅 呼び出し時にサイズ指定
const widthClasses = {
  small: 'w-24'
}

export function Btn({size, text}) {
  const widthClass = widthClasses[size];
  
  return (
    <p className={widthClass}>
      <a href="#" className="block py-4 bg-black text-white text-center leading-none rounded-lg">{text}</a>
    </p>
  )
}