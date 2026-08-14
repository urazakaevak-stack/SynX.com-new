'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (barRef.current) barRef.current.style.height = `${p * 100}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed right-2 top-1/2 z-50 hidden h-1/2 w-1 -translate-y-1/2 rounded-full bg-secondary/60 md:block"
    >
      <div
        ref={barRef}
        className="w-full rounded-full bg-gradient-to-b from-electric via-primary to-accent shadow-[0_0_12px_oklch(0.72_0.16_230/70%)] transition-[height] duration-150"
      />
    </div>
  )
}
