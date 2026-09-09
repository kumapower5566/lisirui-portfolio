import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

function Char({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  return (
    <p ref={ref} className={className}>
      {text.split('').map((char, index) => {
        const start = index / text.length
        const end = start + 1 / text.length
        return (
          <Char key={index} char={char} progress={scrollYProgress} range={[start, end]} />
        )
      })}
    </p>
  )
}
