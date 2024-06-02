import { WorkCont } from "./WorkCont";

export function Works({ }) {
  return (
    <section id="works" className="px-[12.8%] md:px-[5.1%] pt-28 lg:py-24 md:pb-[73px]">
      <div className="lg:max-w-[1168px] lg:mx-auto">
        <h2 className="mb-9 lg:mb-20 font-inter text-2xl">Works</h2>
        <div className="md:flex md:justify-between">
          <WorkCont
            src="/public/img/works_01.jpg"
            title="生徒評価アプリ"
            object="object-contain"
            type="App"
            desc="Next.jsの練習を兼ねた仮想生徒評価アプリ"
            href="#"
            padding="pt-8"
            picPos="ml-auto"
            shadowY="top-0" />
          <WorkCont
            src="/public/img/works_02.jpg"
            title="仮想Webサイト"
            object="object-cover"
            type="Website"
            desc="Vue.jsで作成した仮想Webサイト"
            href="http://vuesample.starfree.jp/"
            target="_blank"
            padding="pb-8"
            shadowX="right-0"
            shadowY="top-8" />
          <WorkCont
            src="/public/img/pc_01.png"
            title="ポートフォリオ"
            type="Website"
            desc="AstroとReactを使用し作成した本サイト"
            href="#"
            padding="pt-8"
            shadowX="right-0"
            shadowY="top-0" />
        </div>
      </div>
    </section>
  )
}