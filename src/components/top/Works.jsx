import { useState } from "react";
import { WorkCont } from "./WorkCont";
import { Modal } from "./Modal";


export function Works({ }) {
  const [activeModal, setActiveModal] = useState(null);
  
  const openModal = (modalId) => {
    setActiveModal(modalId);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  }

  return (
    <>
      <section id="works" className="px-[12.8%] md:px-[5.1%] pt-28 lg:py-24 md:pb-[73px]">
        <div className="lg:max-w-[1168px] lg:mx-auto">
          <h2 className="mb-9 lg:mb-20 font-inter text-2xl">Works</h2>
          <div className="md:flex md:justify-between">
            <WorkCont
              src="/img/works_01.jpg"
              title="生徒評価アプリ"
              object="object-contain"
              type="App"
              desc="Next.jsの練習を兼ねた仮想生徒評価アプリ"
              // href="https://next-assessment-demo.vercel.app/"
              // target="_blank"
              padding="pt-8"
              picPos="ml-auto"
              shadowY="top-0"
              onClick={() => openModal('modal1')}
              />
            <WorkCont
              src="/img/works_02.jpg"
              title="仮想Webサイト"
              object="object-cover"
              type="Website"
              desc="Vue.jsで作成した仮想Webサイト"
              // href="http://vuesample.starfree.jp/"
              // target="_blank"
              padding="pb-8"
              shadowX="right-0"
              shadowY="top-8"
              onClick={() => openModal('modal2')}
              />
            <WorkCont
              src="/img/pc_01.png"
              title="ポートフォリオ"
              object="object-contain"
              type="Website"
              desc="AstroとReactを使用し作成した本サイト"
              href="#"
              padding="pt-8"
              shadowX="right-0"
              shadowY="top-0"
              onClick={() => openModal('modal3')}
              />
          </div>
        </div>
      </section>
      <Modal
        isVisible={activeModal === 'modal1'}
        title="生徒評価アプリ"
        src="/img/works_01.jpg"
        descriotion="学校等で生徒の成績を管理するアプリ。データベースを繋ぎ、簡単に登録・変更が行えるようにしています。成績は一目でわかるようチャート表示が可能です。
       講師用と生徒用のログイン画面を分け、それぞれの権限に応じたページを表示します。"
        type="アプリケーション"
        lang="Next.js, TailwindCSS, Chart.js"
        href="https://next-assessment-demo.vercel.app/"
        btnClick={(e) => e.stopPropagation()}
        onClose={closeModal}
      />
      <Modal
        isVisible={activeModal === 'modal2'}
        title="仮想Webサイト"
        src="/img/works_02.jpg"
        descriotion="学校等で生徒の成績を管理するアプリ。データベースを繋ぎ、簡単に登録・変更が行えるようにしています。成績は一目でわかるようチャート表示が可能です。
       講師用と生徒用のログイン画面を分け、それぞれの権限に応じたページを表示します。"
        type="アプリケーション"
        lang="Next.js, TailwindCSS, Chart.js"
        href="http://vuesample.starfree.jp/"
        btnClick={(e) => e.stopPropagation()}
        onClose={closeModal}
      />
      <Modal
        isVisible={activeModal === 'modal3'}
        title="ポートフォリオ"
        src="/img/pc_01.png"
        descriotion="本サイト"
        type="アプリケーション"
        lang="Astro, React, TailwindCSS"
        href="https://next-assessment-demo.vercel.app/"
        btnClick={(e) => e.stopPropagation()}
        onClose={closeModal}
      />
    </>
  )
}