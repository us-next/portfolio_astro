import { RoundedImg } from "./RoundedImg"

export function Contact({ }) {
  return (
    <section id="contact" className="md:flex md:items-center px-[6.4%] md:px-0 py-14 bg-white">
      <h2 hidden>contact</h2>
      <p className="md:shrink-0 md:w-[70%] md:ml-[3%]">
        <RoundedImg
          src="/public/img/contact_01.jpg"
          alt="contact"
        />
      </p>
      <div className="relative top-[-24px] md:shrink-0 w-[84%] mx-auto md:ml-[-5.2%] md:w-[30%] px-4 md:px-6 py-8 bg-[#f0efec] rounded-2xl">
        <p className="mb-6 text-sm">ご覧いただきありがとうございます。お問い合わせはメールでお願いいたします。
        </p>
        <p>
          <a href="mailto: xx@gmail.com" className="block py-4 bg-black text-white text-center text-sm rounded-lg font-inter">xxxx@gmail.com</a>
        </p>
      </div>
    </section>
  )
}