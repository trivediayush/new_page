import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/portfolio";
import { useReveal } from "@/hooks/use-reveal";

export function Intro() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="intro" aria-labelledby="intro-title" className="scroll-mt-24">
      <div
        ref={ref}
        className="mx-auto w-full max-w-6xl px-6 pt-28 pb-16 md:px-10 md:pt-40 md:pb-24"
      >
        <p className="font-mono text-xs tracking-[0.24em] text-primary uppercase">
          00 / {profile.role} — {profile.location}
        </p>

        <h1
          id="intro-title"
          className={
            "mt-6 max-w-3xl text-3xl leading-[1.08] font-semibold tracking-tight text-foreground transition-all duration-700 sm:text-5xl lg:text-6xl " +
            (shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
          }
        >
          {profile.name}
          <span className="block text-muted-foreground">{profile.headline}</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Abstract
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/90">
              {profile.abstract}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary uppercase"
              >
                Selected work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <dl className="min-w-0">
            {profile.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-border py-3 first:border-t"
              >
                <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
