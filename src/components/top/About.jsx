import { useState, useEffect, useRef } from "react";
import { RoundedImg } from './RoundedImg';

//index.astro内で<About client:load/>としないと
//reactコンポーネントのJSは動かない

export function About({ }) {
  //スクロール位置に基づいて変更するステートを定義
  const [scrolledToAbout, setScrolledToAbout] = useState(false);
  //aboutセクション通過後も背景色を維持するために、useStateを使用
  // const [hasScrolledPastAbout, setHasScrolledPastAbout] = useState(false);
  
  
  //aboutRefという参照を作成し、nullで初期化します。この参照は、AboutセクションのDOM要素を指します。
  const aboutRef = useRef(null);

  useEffect(() => {
    //IntersectionObserverを作成し、Aboutセクションがビューポートに入ったり出たりすることを監視
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          //ビューポートに入ったら、setScrolledToAboutをtrueに設定
          setScrolledToAbout(true);
        }else{
          //ビューポートから出たら、setScrolledToAboutをfalseに設定
          setScrolledToAbout(false);
        }
      },
      {
        root: null, //ビューポートを基準に監視
        rootMargin: '400px', //ビューポートの境界からのマージン
        threshold: 0.8 //Aboutセクションがビューポートに80%入ったらコールバックを実行
      }
    );
    
    if(aboutRef.current) {
      //AboutセクションのDOM要素を監視
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if(aboutRef.current) {
        //AboutセクションのDOM要素の監視を解除
        observer.unobserve(aboutRef.current);
      }
    }
  }, []);
  
  useEffect(() => {
    if(scrolledToAbout) {
      document.body.style.transition = 'background-color 0.5s';
      document.body.style.backgroundColor = '#121918';
      document.body.style.color = '#fff';
    }else{
      document.body.style.backgroundColor = '#F0EFEC';
      document.body.style.color = '#000';
    }
  });

  return (
    <section id="about" ref={aboutRef} className={`md:flex md:flex-row-reverse md:justify-between md:items-center lg:w-[80%] lg:min-w-[940px] lg:max-w-[1224px] lg:mx-auto mb-6 lg:mb-0 px-[6.4%] md:pl-[5.8%] md:pr-[3%] lg:px-0 pt-28 md:pt-48 lg:py-32 font-inter duration-300`}>
      <h2 className="hidden">about</h2>
      <div className="relative md:w-[48%] mb-40 md:mb-0 pb-14 md:pb-0">
        <div className="absolute top-[30px] md:top-[168px] lg:top-[60px] lg:left-[102px] w-[82%] h-[386px] md:h-[336px] lg:w-[384px] lg:h-[560px] bg-[#487B8B] rounded-2xl"></div>
        <p className="relative z-10 w-[82%] md:w-[64%] h-[372px] md:h-[560px] lg:w-[384px] lg:h-[560px] mx-auto md:mx-0 p-8 bg-white rounded-2xl">
          <RoundedImg src="/img/pc_01.png" alt="about" height="h-full" object="object-contain" />
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