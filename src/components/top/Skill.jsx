import { SkillCont } from "./SkillCont"

export function Skill({ }) {
  return (
    <section id="skill" className="px-[6%] md:px-[8%] py-20 lg:py-28 bg-[#12354A] text-white">
      <h2 className="hidden">skill</h2>
      <div className="flex flex-wrap justify-center gap-y-11 lg:max-w-[980px] mx-auto">
        <SkillCont
          src="/img/skill_html.svg"
          alt="HTML"
          skillName="HTML"
          skillDesc="BEMの命名規則を使用"
        />
        <SkillCont
          src="/img/skill_css.svg"
          alt="CSS"
          skillName="CSS3"
          skillDesc="Dartsassを使用"
        />
        <SkillCont
          src="/img/skill_js.svg"
          alt="JavaScript"
          skillName="JavaScript"
          skillDesc="複雑な動きも実装可能"
        />
        <SkillCont
          src="/img/skill_react.svg"
          alt="React"
          skillName="React"
          skillDesc="簡単なアプリ制作が可能"
        />
        <SkillCont
          src="/img/skill_vue.svg"
          alt="Vue3"
          skillName="Vue3"
          skillDesc="コンポーネント思考で制作可能"
        />
        <SkillCont
          src="/img/skill_astro.svg"
          alt="Astro"
          skillName="Astro"
          skillDesc="Webサイト制作が可能"
        />
        <SkillCont
          src="/img/skill_figma.svg"
          alt="Figma"
          skillName="Figma"
          skillDesc="デザインカンプからの"
          skillDescNext="コーディングが可能"
        />
        <SkillCont
          src="/img/skill_xd.svg"
          alt="XD"
          skillName="XD"
          skillDesc="デザインカンプからの"
          skillDescNext="コーディングが可能"
        />
      </div>
    </section>
  )
}