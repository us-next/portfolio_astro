import { RoundedImg } from './RoundedImg';

export function About({ }) {
  return (
    <section id="about" className="px-[6.4%] py-14 font-inter">
      <h2 className="hidden">about</h2>
      <div className="relative mb-40 pb-14">
        <div className="absolute top-[30px] w-[82%] h-[386px] bg-[#487B8B] rounded-2xl"></div>
        <p className="relative z-10 w-[82%] h-[372px] mx-auto">
          <RoundedImg src="/public/img/intro_05.jpg" alt="about" />
        </p>
        <p className="absolute bottom-0  right-0 z-20 w-[55%]">
          <RoundedImg src="/public/img/intro_03.jpg"/>
        </p>
      </div>
      <p className="mb-4 px-6 text-2xl font-medium">
        Warum solltest du deinen Lunch steamen? Es schmeckt einfach besser.
      </p>
      <p className="mb-6 px-6">
        Endlich eine Art des Aufwärmens, die der Qualität deiner Mealprep- Gerichte
        entspricht. Unsere LPS Technologie sorgt für ein schonendes Aufwärmen, um
        Geschmack und Nährstoffe bestmöglich zu erhalten.
      </p>
    </section>
  )
}