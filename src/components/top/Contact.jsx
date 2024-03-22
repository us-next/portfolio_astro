import { RoundedImg } from "./RoundedImg"

export function Contact({ }) {
  return (
    <section id="contact" className="px-[6.4%] py-14 bg-white">
      <p>
        <RoundedImg
          src="/public/img/contact_01.jpg"
          alt="contact"
        />
      </p>
      <div className="relative top-[-24px] w-[84%] mx-auto px-4 py-8 bg-[#f0efec] rounded-2xl">
        <p className="mb-6 text-sm">ご覧いただきありがとうございます。お問い合わせはメールでお願いいたします。
        </p>
        <p>
          <a href="mailto: xx@gmail.com" className="block py-4 bg-black text-white text-center text-sm rounded-lg">xxxx@gmail.com</a>
        </p>
      </div>
    </section>
  )
}