import { RoundedImg } from './RoundedImg';

export function Intro({ }) {
  return (
    <section className="px-[6.4%] pt-14 lg:py-20 font-inter">
      <h2 hidden>intro</h2>
      <p className="w-11/12 md:w-6/12 mx-auto mb-14 text-center text-2xl lg:text-4xl font-medium">
        Steasy ist ein mobiler Mini-Steamer mit eingebautem Akku. Damit kannst
        du deinen vorgekochten Lunch überall hochwertig aufwärmen.
      </p>
      <div className="grid grid-rows-11 md:grid-rows-11-md lg:grid-rows-11-lg grid-cols-2 lg:grid-cols-12-lg gap-4 lg:gap-6 lg:max-w-[1224px] lg:mx-auto">
        <p className="col-start-1 col-end-2 lg:col-end-5 row-start-2 lg:row-start-3 row-end-8 lg:row-end-11">
          <RoundedImg src="/public/img/intro_01.jpg" alt="intro01" />
        </p>
        <p className="col-start-2 lg:col-start-5 col-end-3 lg:col-end-10 row-start-1 row-end-4 lg:row-end-6">
          <RoundedImg src="/public/img/intro_02.jpg" alt="intro02" />
        </p>
        <p className="col-start-1 lg:col-start-10 col-end-2 lg:col-end-13 row-start-8 lg:row-start-3 row-end-11 lg:row-end-6">
          <RoundedImg src="/public/img/intro_03.jpg" alt="intro03" />
        </p>
        <p className="col-start-2 lg:col-start-9 col-end-3 lg:col-end-13 row-start-9 lg:row-start-6 row-end-12 lg:row-end-10">
          <RoundedImg src="/public/img/intro_04.jpg" alt="intro04" />
        </p>
        <p className="col-start-2 lg:col-start-5 col-end-3 lg:col-end-9 row-start-4 lg:row-start-6 row-end-9 lg:row-end-12">
          <RoundedImg src="/public/img/intro_05.jpg" alt="intro05" />
        </p>
      </div>
    </section>
  );
}
