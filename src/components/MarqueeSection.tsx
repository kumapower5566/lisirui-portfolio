import { useEffect, useRef, useState } from 'react'
import { marqueeRow1, marqueeRow2 } from '../data/content'

function Row({
  images,
  offset,
  direction,
}: {
  images: string[]
  offset: number
  direction: 'left' | 'right'
}) {
  const x = direction === 'right' ? offset - 200 : -(offset - 200)
  return (
    <div className="flex gap-3" style={{ transform: `translateX(${x}px)` }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const row1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1]
  const row2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2]

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Showcase"
    >
      <div className="flex flex-col gap-3" style={{ willChange: 'transform' }}>
        <Row images={row1} offset={offset} direction="right" />
        <Row images={row2} offset={offset} direction="left" />
      </div>
    </section>
  )
}
