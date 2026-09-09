import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'
import { projects, type Project } from '../data/content'

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-24 flex h-[85vh] items-center justify-center md:top-32">
      <motion.div
        className="w-full rounded-[40px] border-2 border-[#D7E2EA] bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 md:pb-10">
          <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none">
            {project.number}
          </span>
          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
              {project.category}
            </span>
            <h3 className="text-xl font-medium uppercase text-[#D7E2EA] sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
            <p className="max-w-sm text-sm font-light text-[#D7E2EA]/70">
              {project.description}
            </p>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.col1a}
              alt={`${project.name} image 1`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px,16vw,230px)' }}
            />
            <img
              src={project.col1b}
              alt={`${project.name} image 2`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px,22vw,340px)' }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.col2}
              alt={`${project.name} image 3`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const container = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink pb-10 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
      id="projects"
      aria-label="Projects"
    >
      <FadeIn delay={0} y={40} className="px-5 pt-20 sm:px-8 md:px-10 md:pt-28">
        <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </FadeIn>

      <div className="mt-16 sm:mt-20 md:mt-28">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
