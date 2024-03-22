import { RoundedImg } from "./RoundedImg";
import { Btn } from "../btn";

export function WorkCont({src, alt, title, type, desc, padding, picPos, shadowX, shadowY}) {
  //呼び出し先で指定
  //padding： 画像とシャドウの箱に使用
  //picPos： 画像右寄せ時に使用
  //shadowX : シャドウの左右位置
  //shadowY : シャドウの上下位置
  
  return (
    <div className="md:w-[27.5%] mb-14 md:mb-0">
      <div className={`relative mb-7 ${padding}`}>
        <div className={`absolute ${shadowX} ${shadowY} w-[87%] h-[351px] md:h-60 bg-[#315B6D] rounded-xl`}></div>
        <p className={`relative z-10 w-[87%] h-[351px] md:h-60 ${picPos}`}><RoundedImg src={src} alt={alt}/></p>
      </div>
        <p className="mb-4 text-2xl font-semibold">{title}</p>
        <p className="mb-4 text-[#12354A] text-lg font-inter font-medium">{type}</p>
        <p className="mb-7 md:mb-[78px]">{desc}</p>
        <Btn size="w-24" text="More" />
    </div>
  )
}