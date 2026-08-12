import { certifications, education } from "@/content/portfolio";
import { Section } from "./Section";

export function Credentials() {
  return (
    <Section
      id="credentials"
      index={4}
      title="Education & certifications"
      abstract="Formal education and verified certifications, listed as records."
      tone="shade"
    >
      <div className="border-t border-border">
        <div className="grid gap-2 border-b border-border py-6 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-10">
          <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {education.period}
          </p>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 font-mono text-xs tracking-[0.12em] text-primary uppercase">
              {education.institution}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{education.note}</p>
          </div>
        </div>

        <div className="grid gap-2 py-6 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-10">
          <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Certifications
          </p>
          <ul className="min-w-0">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border py-3 first:border-t"
              >
                <span className="min-w-0 text-sm text-foreground">{cert.name}</span>
                <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
