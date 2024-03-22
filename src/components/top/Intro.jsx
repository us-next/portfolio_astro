import { RoundedImg } from './RoundedImg';

export function Intro({ }) {
  return (
    <section className="px-[6.4%] pt-14 font-inter">
      <h2 hidden>intro</h2>
      <p className="w-11/12 md:w-6/12 mx-auto mb-14 text-center text-2xl font-medium">
        Steasy ist ein mobiler Mini-Steamer mit eingebautem Akku. Damit kannst
        du deinen vorgekochten Lunch überall hochwertig aufwärmen.
      </p>
      <div className="grid grid-rows-11 md:grid-rows-11-md grid-cols-2 gap-16px">
        <p className="col-start-1 col-end-2 row-start-2 row-end-8">
          <RoundedImg src="/public/img/intro_01.jpg" alt="intro01" />
        </p>
        <p className="col-start-2 col-end-3 row-start-1 row-end-4">
          <RoundedImg src="/public/img/intro_02.jpg" alt="intro02" />
        </p>
        <p className="col-start-1 col-end-2 row-start-8 row-end-11">
          <RoundedImg src="/public/img/intro_03.jpg" alt="intro03" />
        </p>
        <p className="col-start-2 col-end-3 row-start-9 row-end-12">
          <RoundedImg src="/public/img/intro_04.jpg" alt="intro04" />
        </p>
        <p className="col-start-2 col-end-3 row-start-4 row-end-9">
          <RoundedImg src="/public/img/intro_05.jpg" alt="intro05" />
        </p>
      </div>
    </section>
  );
}
