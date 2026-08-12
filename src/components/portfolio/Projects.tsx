import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      index={3}
      title="Selected work"
      abstract="Each entry states the problem, the approach taken and the outcome."
    >
      <ol className="border-t border-border">
        {projects.map((project, i) => (
          <li key={project.title} className="border-b border-border py-8">
            <div className="grid gap-2 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-8">
              <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  {project.stack}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  {(
                    [
                      ["Problem", project.problem],
                      ["Approach", project.approach],
                      ["Result", project.result],
                    ] as const
                  ).map(([label, body]) => (
                    <div key={label} className="border-t border-border pt-3">
                      <p className="font-mono text-[0.65rem] tracking-[0.2em] text-primary uppercase">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{body}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary uppercase"
                >
                  Repository on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
