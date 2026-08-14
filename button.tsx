const STAFF = [
  { role: 'SynX Monarch', name: 'troyapofffff' },
  { role: 'Co Monarch', name: 'tl4o' },
  { role: 'Extra Wing', name: 'lighting_gods' },
  { role: 'Right Wing', name: 'personalnumber' },
  { role: 'Left Wing', name: 'grandioz' },
]

export function StaffSection() {
  return (
    <section id="staff" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center font-serif text-3xl text-primary animate-glow-text md:text-4xl">Стафф клана</h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground leading-relaxed text-pretty">
        Наш стафф работает 24/7 — рейды, набор новых бойцов и поддержка каждого участника.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {STAFF.map((m, i) => (
          <div
            key={m.name}
            className="group relative w-full max-w-[240px] overflow-hidden rounded-xl border border-border bg-card p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-electric/70 hover:shadow-[0_0_40px_oklch(0.82_0.14_210/30%)] animate-float-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="font-serif text-xs uppercase tracking-[0.25em] text-electric">{m.role}</p>
            <p className="mt-3 text-lg font-semibold text-foreground transition-all duration-300 group-hover:text-primary group-hover:[text-shadow:0_0_16px_oklch(0.72_0.16_230/80%)]">
              {m.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
