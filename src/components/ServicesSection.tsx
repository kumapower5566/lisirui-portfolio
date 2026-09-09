import FadeIn from './FadeIn'
import { services } from '../data/content'

export default function ServicesSection() {
  return (
    <section
      className="rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      id="services"
      aria-label="Services"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-ink text-[clamp(3rem,12vw,160px)] sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <div key={service.number}>
            <FadeIn delay={index * 0.1} y={30}>
              <div className="flex flex-col gap-2 border-b border-[rgba(12,12,12,0.15)] py-8 sm:flex-row sm:gap-8 sm:py-10 md:py-12">
                <span className="shrink-0 font-black text-ink text-[clamp(3rem,10vw,140px)] leading-none">
                  {service.number}
                </span>
                <div className="flex flex-col justify-center gap-2 pt-2 sm:pt-0">
                  <h3 className="font-medium uppercase text-ink text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl text-[0.85rem] font-light leading-relaxed text-ink opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  )
}
