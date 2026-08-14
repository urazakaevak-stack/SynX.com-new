'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 2000)
    const t2 = setTimeout(() => setGone(true), 2700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-700 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <Image
        src="/images/synx-logo.png"
        alt="Логотип клана SynX"
        width={140}
        height={140}
        priority
        className="animate-logo-pulse rounded-2xl"
      />
      <p className="font-serif text-2xl tracking-[0.35em] text-primary animate-glow-text">SYNX</p>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-full origin-left animate-[float-in_1.8s_ease-in-out] bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  )
}
