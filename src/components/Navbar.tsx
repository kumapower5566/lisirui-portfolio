import FadeIn from './FadeIn'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <FadeIn
      delay={0}
      y={-20}
      className="z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
        >
          {link.label}
        </a>
      ))}
    </FadeIn>
  )
}
