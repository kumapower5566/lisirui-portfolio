import FadeIn from './FadeIn'
import Navbar from './Navbar'
import ContactButton from './ContactButton'
import HeroModel from './HeroModel'
import { person } from '../data/content'

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col overflow-x-clip"
      aria-label="Hero"
    >
      <Navbar />

      <div className="relative mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[clamp(2.6rem,10.5vw,11rem)] font-black uppercase leading-none tracking-tight">
            Hi, i&rsquo;m {person.name}
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[0.75rem] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] sm:text-[1rem] md:max-w-[260px] md:text-[1rem]">
            {person.heroIntro}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[340px] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:h-[460px] sm:w-[430px] md:h-[540px] md:w-[500px] lg:h-[620px] lg:w-[580px]">
        <FadeIn delay={0.6} y={30} className="h-full w-full">
          <HeroModel />
        </FadeIn>
      </div>
    </section>
  )
}
