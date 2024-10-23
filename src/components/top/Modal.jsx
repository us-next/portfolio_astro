import { RoundedImg } from "./RoundedImg";
import { Btn } from "../btn";

export function Modal({ onClose, isVisible, btnClick, title, src, alt, descriotion, type, lang, href, hidden }) {
  return (
    <div onClick={onClose} className={`${isVisible ? 'visible' : 'invisible'} fixed top-0 left-0 z-40 p-10 bg-[#121918f5] text-white`}>
      <div className="h-screen lg:flex lg:flex-col lg:justify-center">
        <p className="mb-6 text-lg lg:mb-20 lg:text-center lg:text-2xl">{title}</p>
        <div className="lg:flex lg:gap-10">
          <p className="w-6/12 mb-10 mx-auto">
            <RoundedImg src={src} alt={alt} />
          </p>
          <div className="lg:w-6/12 lg:pt-4">
            <p className="mb-6 text-sm">{descriotion}</p>
            <div className="mb-6">
              <p className="mb-1">種類</p>
              <p>{type}</p>
            </div>
            <div className="mb-8">
              <p className="mb-1">使用言語等</p>
              <p>{lang}</p>
            </div>
            <div className="w-fit mx-auto lg:m-0">
              <Btn onClick={btnClick} href={href} hidden={hidden} target="_blank" size="w-24" text="View More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}