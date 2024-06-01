import { RoundedImg } from './RoundedImg';

export function About({ }) {
  return (
    <section id="about" className="md:flex md:flex-row-reverse md:justify-between md:items-center lg:w-[80%] lg:min-w-[940px] lg:max-w-[1224px] lg:mx-auto mb-6 lg:mb-0 px-[6.4%] md:pl-[5.8%] md:pr-[3%] lg:px-0 pt-28 md:pt-48 lg:py-32 font-inter">
      <h2 className="hidden">about</h2>
      <div className="relative md:w-[48%] mb-40 md:mb-0 pb-14 md:pb-0">
        <div className="absolute top-[30px] md:top-[168px] lg:top-[60px] lg:left-[102px] w-[82%] h-[386px] md:h-[336px] lg:w-[384px] lg:h-[560px] bg-[#487B8B] rounded-2xl"></div>
        <p className="relative z-10 w-[82%] md:w-[64%] h-[372px] md:h-[560px] lg:w-[384px] lg:h-[560px] mx-auto md:mx-0 p-8 bg-white rounded-2xl">
          <RoundedImg src="/public/img/pc_01.png" alt="about" height="h-full" object="object-contain"/>
        </p>
        {/* <p className="absolute bottom-0 md:bottom-[88px] lg:bottom-[15px] right-0 z-20 w-[55%] md:w-[49%] lg:w-[282px]">
          <RoundedImg src="/public/img/pc_01.png" />
        </p> */}
      </div>
      <div className="md:w-[44%] px-6 md:px-0">
        <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl font-medium">
          Warum solltest du deinen Lunch steamen? Es schmeckt einfach besser.
        </p>
        <p className="lg:text-lg">
          Endlich eine Art des Aufwärmens, die der Qualität deiner Mealprep- Gerichte
          entspricht. Unsere LPS Technologie sorgt für ein schonendes Aufwärmen, um
          Geschmack und Nährstoffe bestmöglich zu erhalten.
        </p>
      </div>
    </section>
  )
}