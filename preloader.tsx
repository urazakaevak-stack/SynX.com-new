'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

const COUNTRIES = [
  { name: 'США', flag: 'US', desc: 'Мемберы SynX из Соединённых Штатов' },
  { name: 'Россия', flag: 'RU', desc: 'Мемберы SynX из России' },
  { name: 'Украина', flag: 'UA', desc: 'Мемберы SynX из Украины' },
]

export function GlobeMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    let phi = 0

    const size = canvasRef.current.offsetWidth

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.5, 1],
      markerColor: [0.45, 0.9, 1],
      glowColor: [0.2, 0.4, 1],
      scale: 1,
      offset: [0, 0],
      opacity: 0.95,
      markers: [
        { location: [38.9, -77.0], size: 0.12 }, // США
        { location: [55.75, 37.62], size: 0.12 }, // Россия
        { location: [50.45, 30.52], size: 0.12 }, // Украина
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.004
      },
    })

    return () => globe.destroy()
  }, [])

  return (
    <section id="map" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center font-serif text-3xl text-primary animate-glow-text md:text-4xl text-balance">
        Наши мемберы по всему миру
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground leading-relaxed text-pretty">
        Клан SynX объединяет сильнейших игроков из США, России и Украины. Разные страны — одна цель: доминировать на
        поле боя.
      </p>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-[480px]">
          <canvas
            ref={canvasRef}
            aria-label="Вращающийся глобус с отметками стран участников клана: США, Россия, Украина"
            className="size-full"
            style={{ contain: 'layout paint size' }}
          />
        </div>

        <div className="flex flex-col gap-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.name}
              className="group rounded-xl border border-border bg-card p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_oklch(0.72_0.16_230/25%)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-secondary font-serif text-sm text-electric">
                  {c.flag}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
