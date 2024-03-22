import { WorkCont } from "./WorkCont";

export function Works({ }) {
  return (
    <section id="works" className="px-[12.8%] md:px-[5.1%] pt-28 md:pb-[73px]">
      <h2 className="mb-9 font-inter text-2xl">Works</h2>
      <div className="md:flex md:justify-between">
        <WorkCont
          src="/public/img/intro_01.jpg"
          title="生徒評価アプリ"
          type="App"
          desc="Next.jsの練習を兼ねた仮想の生徒評価アプリ"
          padding="pt-8"
          picPos="ml-auto"
          shadowY="top-0" />
        <WorkCont
          src="/public/img/intro_01.jpg"
          title="仮想Webサイト"
          type="Website"
          desc="Vue.jsで作成した仮想Webサイト"
          padding="pb-8"
          shadowX="right-0"
          shadowY="top-8" />
        <WorkCont
          src="/public/img/intro_01.jpg"
          title="ポートフォリオ"
          type="Website"
          desc="AstroとReactを使用し作成した本サイト"
          padding="pt-8"
          shadowX="right-0"
          shadowY="top-0" />
      </div>
    </section>
  )
}