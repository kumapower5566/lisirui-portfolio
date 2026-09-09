import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import { person, aboutDecor } from '../data/content'

export default function AboutSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
      id="about"
      aria-label="About"
    >
      {aboutDecor.map((decor) => (
        <FadeIn
          key={decor.src}
          delay={decor.fade.delay}
          x={decor.fade.x}
          y={decor.fade.y}
          duration={decor.fade.duration}
          className={`pointer-events-none absolute ${decor.pos} ${decor.size} opacity-80`}
        >
          <img src={decor.src} alt="" loading="lazy" className="h-auto w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={person.aboutText}
          className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
        />

        <div className="mt-10 sm:mt-14 md:mt-16">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
