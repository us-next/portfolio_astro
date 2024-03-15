import { WorkCont } from "./WorkCont";
// import {}

export function Works({ }) {
  return (
    <section className="px-6">
      <h2 className="mb-9 text-2xl">Works</h2>
      <WorkCont
        src="/public/img/intro_01.jpg"
        title="生徒評価アプリ"
        type="App" 
        desc="Next.jsの練習を兼ねた仮想の生徒評価アプリ"/>
    </section>
  )
}