import { useState } from "react";
import { expertise } from "@/content/portfolio";
import { Section } from "./Section";
import { ToolIcon } from "./ToolIcon";

const allTools = Array.from(new Set(expertise.flatMap((row) => row.tools)));

export function Expertise() {
  const [active, setActive] = useState(0);
  const current = expertise[active] ?? expertise[0]!;

  return (
    <Section
      id="expertise"
      index={2}
      title="Technical expertise"
      abstract="Select a discipline to see the toolchain."
      tone="shade"
    >
      <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
        <div role="tablist" aria-label="Capability areas" className="border-t border-border">
          {expertise.map((row, i) => {
            const on = i === active;
            return (
              <button
                key={row.category}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={
                  "group relative flex w-full items-center justify-between gap-3 border-b border-border py-3 text-left font-mono text-[0.7rem] tracking-[0.16em] uppercase transition-colors duration-300 " +
                  (on ? "text-primary" : "text-muted-foreground hover:text-foreground")
                }
              >
                <span
                  aria-hidden="true"
                  className={
                    "absolute top-0 left-0 h-full w-px bg-primary transition-transform duration-500 ease-out " +
                    (on ? "scale-y-100" : "scale-y-0")
                  }
                />
                <span className="pl-3">{row.category}</span>
                <span className={"tabular-nums " + (on ? "text-highlight" : "opacity-60")}>
                  {String(row.tools.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div className="min-w-0">
          <ul
            key={active}
            className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-3"
          >
            {current.tools.map((tool, i) => (
              <li
                key={tool}
                className="group tool-tile flex min-h-[4.75rem] items-center gap-3 border-r border-b border-border px-4 py-5 transition-colors duration-300 hover:bg-background"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <ToolIcon
                  name={tool}
                  className="h-6 w-6 shrink-0 text-foreground/70 transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--brand,currentColor)]"
                />
                <span className="min-w-0 text-sm leading-snug text-foreground">{tool}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-y border-border py-4">
            <p className="mb-3 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Full stack in rotation
            </p>
            <div className="marquee">
              <div className="marquee-track">
                {[...allTools, ...allTools].map((tool, i) => (
                  <span
                    key={tool + i}
                    className="flex shrink-0 items-center gap-2 text-muted-foreground"
                    title={tool}
                  >
                    <ToolIcon name={tool} className="h-4 w-4" />
                    <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase">
                      {tool}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
