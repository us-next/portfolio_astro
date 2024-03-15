import { Img } from "./Img";
import { Btn } from "../btn";

export function WorkCont({src, alt, title, type, desc}) {
  return (
    <div>
      <div className="relative mb-7 pt-8">
        <div className="absolute top-0 w-[87%] h-[351px] bg-[#315B6D] rounded-xl"></div>
        <p className="relative z-10 w-[87%] h-[351px] ml-auto"><Img src={src} alt={alt}/></p>
      </div>
        <p className="mb-4 text-2xl font-semibold">{title}</p>
        <p className="mb-4 text-[#12354A] text-lg font-medium">{type}</p>
        <p className="mb-7">{desc}</p>
        <Btn size="small" text="More" />
    </div>
  )
}