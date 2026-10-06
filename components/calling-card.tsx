import { ArrowUpRight } from 'lucide-react'

const LINKEDIN_URL = 'https://linkedin.com/in/christopherwilliams2018'

export function CallingCard() {
  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-2xl border bg-card shadow-sm">
      <header className="bg-carbon border-b border-primary px-8 py-10 text-primary-foreground sm:px-12 sm:py-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          Technology Portfolio &amp; Operations Leader
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
          Christopher Williams
        </h1>
      </header>

      <div className="flex flex-col gap-8 px-8 py-10 sm:px-12">
        <section aria-labelledby="what-i-do">
          <h2
            id="what-i-do"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            What I do
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-pretty">
            Technology portfolio and operations leader with 15+ years of
            experience driving strategic execution, financial stewardship, and
            cross-functional delivery, aligning technology investments with
            business outcomes through scalable governance, portfolio
            management, and operational excellence.
          </p>
        </section>

        <section aria-labelledby="more" className="border-t pt-8">
          <h2
            id="more"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            A little more
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
            Technology portfolio and operations leader with deep experience in
            program management, financial stewardship, and strategic planning
            for mission-critical organizations. Recognized for building
            scalable governance frameworks, driving cross-functional execution,
            and balancing innovation with disciplined operational management.
            Combines an MBA, PMP certification, and extensive leadership
            experience to help organizations achieve growth, efficiency, and
            customer-focused outcomes.
          </p>
        </section>

        <footer className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How to reach me
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              linkedin.com/in/christopherwilliams2018
            </p>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-carbon px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </footer>
      </div>
    </article>
  )
}
