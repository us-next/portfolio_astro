import { RoundedImg } from "./RoundedImg"

export function Contact({ }) {
  return (
    <section id="contact" className="px-[6.4%] md:px-0 lg:px-[3%] py-14 md:py-44 lg:py-56 bg-white">
      <h2 hidden>contact</h2>
      <div className="md:flex md:items-center mx-auto lg:max-w-[1224px]">
        <p className="md:shrink-0 md:w-[70%] md:ml-[3%] lg:ml-0 p-12 bg-white rounded-2xl aspect-square md:aspect-[3/2] lg:">
          <RoundedImg
            src="img/pc_01.png"
            alt="contact"
            object="object-contian"
          />
        </p>
        <div className="relative top-[-24px] md:top-0 md:shrink-0 w-[84%] mx-auto md:ml-[-40px] md:w-[30%] px-4 md:px-6 py-8 bg-[#f0efec] rounded-2xl">
          <p className="mb-6 text-sm">ご覧いただきありがとうございます。お問い合わせはメールでお願いいたします。
          </p>
          <p>
            <a href="mailto: xx@gmail.com" className="block py-4 bg-black text-white text-center text-sm rounded-lg font-inter transition duration-300 hover:scale-90">xxxx@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}