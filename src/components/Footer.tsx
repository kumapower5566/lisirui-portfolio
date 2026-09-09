import { AtSign, Globe, Mail } from 'lucide-react'
import { person } from '../data/content'

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center gap-8 bg-ink px-6 pb-12 pt-20 text-center sm:px-10 md:pt-28"
      id="contact"
      aria-label="Contact"
    >
      <h2 className="hero-heading text-[clamp(2.5rem,9vw,120px)] font-black uppercase leading-none tracking-tight">
        Let&rsquo;s talk
      </h2>
      <p className="max-w-md text-sm font-light uppercase tracking-wide text-[#D7E2EA]/70">
        有兴趣一起合作吗？随时联系我 —— 我很乐于迎接有趣的协作项目。
      </p>
      <a
        href="mailto:hello@lisirui.design"
        className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
      >
        <Mail className="h-4 w-4" />
        hello@lisirui.design
      </a>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/lisirui"
          target="_blank"
          rel="noreferrer"
          aria-label="Social profile"
          className="p-2 text-[#D7E2EA]/70 transition-colors hover:text-[#D7E2EA]"
        >
          <AtSign className="h-5 w-5" />
        </a>
        <a
          href="https://lisirui.design"
          target="_blank"
          rel="noreferrer"
          aria-label="Website"
          className="p-2 text-[#D7E2EA]/70 transition-colors hover:text-[#D7E2EA]"
        >
          <Globe className="h-5 w-5" />
        </a>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
        © {new Date().getFullYear()} {person.name} — {person.tagline}
      </p>
    </footer>
  )
}
