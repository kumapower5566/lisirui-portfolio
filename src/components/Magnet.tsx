import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const node = ref.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = event.clientX - centerX
      const distY = event.clientY - centerY
      const within =
        Math.abs(distX) < rect.width / 2 + padding &&
        Math.abs(distY) < rect.height / 2 + padding

      if (within) {
        setActive(true)
        setPos({ x: distX / strength, y: distY / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
