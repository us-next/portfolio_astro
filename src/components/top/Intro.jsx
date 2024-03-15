import { Img } from './Img';

export function Intro({ }) {
  return (
    <section className="py-14">
      <h2 className="hidden">intro</h2>
      <p className="w-11/12 mx-auto mb-14 text-center text-2xl font-medium">
        Steasy ist ein mobiler Mini-Steamer mit eingebautem Akku. Damit kannst
        du deinen vorgekochten Lunch überall hochwertig aufwärmen.
      </p>
      <div className="grid grid-rows-11 grid-cols-2 gap-16px">
        <p className="col-start-1 col-end-2 row-start-2 row-end-8">
          <Img src="/public/img/intro_01.jpg" alt="intro01" />
        </p>
        <p className="col-start-2 col-end-3 row-start-1 row-end-4">
          <Img src="/public/img/intro_02.jpg" alt="intro02" />
        </p>
        <p className="col-start-1 col-end-2 row-start-8 row-end-11">
          <Img src="/public/img/intro_03.jpg" alt="intro03" />
        </p>
        <p className="col-start-2 col-end-3 row-start-9 row-end-12">
          <Img src="/public/img/intro_04.jpg" alt="intro04" />
        </p>
        <p className="col-start-2 col-end-3 row-start-4 row-end-9">
          <Img src="/public/img/intro_05.jpg" alt="intro05" />
        </p>
      </div>
    </section>
  );
}
