import { roles } from "@/content/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index={1}
      title="Experience"
      abstract="Roles held, with the outcome each one delivered."
    >
      <ol className="border-t border-border">
        {roles.map((role) => (
          <li
            key={role.company}
            className="group relative grid gap-3 border-b border-border py-7 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-10"
          >
            {role.current && (
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-px w-16 bg-primary md:-left-6 md:w-4"
              />
            )}
            <div>
              <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {role.period}
              </p>
              {role.current && (
                <p className="mt-2 font-mono text-[0.7rem] tracking-[0.18em] text-primary uppercase">
                  Current
                </p>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {role.title}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-[0.12em] text-primary uppercase">
                {role.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{role.summary}</p>
              <ul className="mt-4 grid gap-2 border-l border-border pl-4">
                {role.details.map((detail) => (
                  <li key={detail} className="text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
