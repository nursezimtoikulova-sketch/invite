import { Diamond } from "./Ornament";
import { Reveal } from "./Reveal";

export function Greeting() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <Diamond className="h-2.5 w-2.5 text-red" />
            <p className="eyebrow text-red">Урматтуу ата-энелер, кымбаттуу коноктор</p>
            <Diamond className="h-2.5 w-2.5 text-red" />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 font-display text-3xl sm:text-[2.6rem] font-medium leading-snug text-ink">
            31-октябрда мектебибиз{" "}
            <span className="italic text-red">«Улуттук дем»</span> аттуу маданий
            иш-чарарбызда  сыйлуу коногубуз болуп кетүүгө чакырабыз . {" "}
        
          
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-sm sm:text-base leading-relaxed tracking-wide text-ink-soft">
            Балдарыбыздын кыргыз тилин, маданиятын жана тарыхын жакшы билгени
            — баарыбыздын чоң кубанычыбыз. Бул салтанатка урмат менен
            чакырабыз — келгениңизди чын жүрөктөн күтөбүз!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
