const CREATORS = [
  { role: 'Главный создатель', name: 'awesomes' },
  { role: 'Со-создатель', name: 'stefanov08611' },
]

const DISCORD_URL = 'https://discord.gg/symphonyx'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-xl text-primary">Создатели сайта</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-5">
          {CREATORS.map((c) => (
            <a
              key={c.name}
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card px-8 py-4 text-center backdrop-blur transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_36px_oklch(0.82_0.14_210/40%)] active:shadow-[0_0_60px_oklch(0.82_0.14_210/70%)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.role}</p>
              <p className="mt-1 font-serif text-lg text-foreground transition-all duration-300 group-hover:text-electric group-hover:[text-shadow:0_0_20px_oklch(0.82_0.14_210/90%)]">
                {c.name}
              </p>
              <p className="mt-1 text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Написать в Discord
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Конфиденциальность и защита данных: сайт клана SynX не собирает и не хранит персональные данные
            посетителей. Все переходы во внешние сервисы (Discord) осуществляются добровольно.
          </p>
          <p className="mt-4 font-serif text-sm tracking-[0.3em] text-primary/70">
            SYNX © {new Date().getFullYear()} — THE STRONGEST BATTLEGROUNDS
          </p>
        </div>
      </div>
    </footer>
  )
}
