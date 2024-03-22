import { RoundedImg } from './RoundedImg';

export function About({ }) {
  return (
    <section id="about" className="md:flex md:flex-row-reverse md:justify-between md:items-center mb-6 px-[6.4%] md:pl-[5.8%] md:pr-[3%] pt-28 md:pt-48 font-inter">
      <h2 className="hidden">about</h2>
      <div className="relative md:w-[48%] mb-40 md:mb-0 pb-14 md:pb-0">
        <div className="absolute top-[30px] md:top-[168px] w-[82%] h-[386px] md:h-[336px] bg-[#487B8B] rounded-2xl"></div>
        <p className="relative z-10 w-[82%] md:w-[64%] h-[372px] md:h-[560px] mx-auto md:mx-0">
          <RoundedImg src="/public/img/intro_05.jpg" alt="about" />
        </p>
        <p className="absolute bottom-0 md:bottom-[88px] right-0 z-20 w-[55%] md:w-[49%]">
          <RoundedImg src="/public/img/intro_03.jpg" />
        </p>
      </div>
      <div className="md:w-[44%] px-6">
        <p className="mb-4 text-2xl font-medium">
          Warum solltest du deinen Lunch steamen? Es schmeckt einfach besser.
        </p>
        <p className="">
          Endlich eine Art des Aufwärmens, die der Qualität deiner Mealprep- Gerichte
          entspricht. Unsere LPS Technologie sorgt für ein schonendes Aufwärmen, um
          Geschmack und Nährstoffe bestmöglich zu erhalten.
        </p>
      </div>
    </section>
  )
}