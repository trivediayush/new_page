import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { profile, services } from "@/content/portfolio";
import { Section } from "./Section";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="services"
      index={5}
      title="Freelance engagements"
      abstract="Expand an engagement to see scope, timeline and deliverables."
    >
      <div className="border-t border-border">
        <div className="hidden grid-cols-[2.5rem_minmax(0,1fr)_9rem_2rem] items-baseline gap-6 border-b border-border py-3 sm:grid">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            No.
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            Engagement
          </p>
          <p className="text-right font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            Indicative fee
          </p>
          <span />
        </div>

        {services.map((service, i) => {
          const on = i === open;
          return (
            <div key={service.name} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(on ? -1 : i)}
                aria-expanded={on}
                className={
                  "group relative grid w-full grid-cols-[minmax(0,1fr)_2rem] items-baseline gap-4 py-5 text-left transition-colors duration-300 sm:grid-cols-[2.5rem_minmax(0,1fr)_9rem_2rem] sm:gap-6 " +
                  (on ? "bg-primary/8" : "hover:bg-primary/5")
                }
              >
                <span
                  aria-hidden="true"
                  className={
                    "absolute top-0 left-0 h-full w-px bg-primary transition-transform duration-500 ease-out " +
                    (on ? "scale-y-100" : "scale-y-0")
                  }
                />
                <span className="hidden pl-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span
                    className={
                      "block text-base font-semibold tracking-tight transition-colors " +
                      (on ? "text-primary" : "text-foreground group-hover:text-primary")
                    }
                  >
                    {service.name}
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                    <span className="text-signal">{service.timeline}</span>
                    <span aria-hidden="true">/</span>
                    <span className="sm:hidden">{service.price}</span>
                    <span className="hidden sm:inline">
                      {service.deliverables.length} deliverables
                    </span>
                  </span>
                </span>
                <span className="hidden font-mono text-sm text-primary sm:block sm:text-right">
                  {service.price}
                </span>
                <span
                  aria-hidden="true"
                  className="justify-self-end text-muted-foreground transition-colors group-hover:text-primary"
                >
                  {on ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              <div
                className={
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out " +
                  (on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                }
              >
                <div className="min-h-0">
                  <div className="grid gap-8 pb-8 sm:pl-[3.25rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
                    <div className="min-w-0">
                      <p className="max-w-xl text-sm leading-relaxed text-foreground/90">
                        {service.scope}
                      </p>
                      <p className="mt-4 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                        Best for
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {service.bestFor}
                      </p>
                    </div>
                    <ul className="min-w-0 border-t border-border">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 border-b border-border py-3 text-sm leading-relaxed text-foreground/90"
                        >
                          <span aria-hidden="true" className="font-mono text-xs text-primary">
                            —
                          </span>
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <a
          href={`mailto:${profile.email}?subject=Freelance%20DevOps%20engagement`}
          className="group mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary uppercase"
        >
          Start onboarding
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  );
}
