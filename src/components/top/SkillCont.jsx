import { SquareImg } from "./SquareImg";

export function SkillCont({ src, alt, skillName, skillDesc, skillDescNext }) {
  return (
    <div className="w-[48%] md:w-1/4 text-center">
      <div className="flex justify-center items-center mx-auto mb-5 bg-pink w-[107px] h-[107px] rounded-full">
        <p className="w-[60px] aspect-square"><SquareImg src={src} alt={alt} /></p>
      </div>
      <p className="mb-1 font-inter text-lg">{skillName}</p>
      <p className="text-xs">{skillDesc}<br />{skillDescNext}</p>
    </div>
  )
}