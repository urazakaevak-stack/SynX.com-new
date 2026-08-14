export function AnimeBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blue Lock style animated background image */}
      <div
        className="absolute inset-0 animate-bg-drift bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bluelock-bg.png')" }}
      />
      {/* dark overlay so content is readable */}
      <div className="absolute inset-0 bg-background/70" />
      {/* pulsing energy glow */}
      <div className="absolute inset-0 animate-energy-pulse bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.18_260_/_25%),transparent_65%)]" />
      {/* moving light streaks */}
      <div className="absolute top-1/4 left-0 h-px w-1/2 animate-streak bg-gradient-to-r from-transparent via-electric to-transparent" />
      <div
        className="absolute top-1/2 left-0 h-px w-2/3 animate-streak bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ animationDelay: '2.5s' }}
      />
      <div
        className="absolute top-3/4 left-0 h-px w-1/2 animate-streak bg-gradient-to-r from-transparent via-accent to-transparent"
        style={{ animationDelay: '5s' }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0.1_0.04_255)_100%)]" />
    </div>
  )
}
