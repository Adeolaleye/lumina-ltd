import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import svcMigration from "../assets/svc-migration.jpg";
import svcAppdev from "../assets/svc-appdev.jpg";
import svcSecurity from "../assets/svc-security.jpg";
import svcTraining from "../assets/svc-training.jpg";
import svcConsulting from "../assets/svc-consulting.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cloud Migration, Security, DevOps | Lumina" },
      { name: "description", content: "Cloud migration company delivering cloud-native solutions, infrastructure modernization, cloud security services, IT consulting, ICT training, DevOps, and scalable cloud architecture." },
      { property: "og:title", content: "Services — Lumina" },
      { property: "og:description", content: "Cloud migration, cloud-native development, IT security, ICT capacity building, and IT consulting from Lumina." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    image: svcMigration,
    title: "Cloud Migration & Modernization",
    body: "We move your workloads, applications, and data to the cloud with minimal downtime, then modernize your infrastructure so it's faster, more cost-efficient, and ready to scale.",
    points: ["Lift-and-shift", "Re-platforming", "Containerization", "Legacy system upgrades"],
  },
  {
    image: svcAppdev,
    title: "Cloud-Native Application Development",
    body: "We design and build applications that are cloud-native from day one — scalable, resilient, and easy to maintain across their entire lifecycle.",
    points: ["Microservices", "Serverless", "CI/CD pipelines", "DevOps practices"],
  },
  {
    image: svcSecurity,
    title: "IT Security & Compliance",
    body: "Security is built into everything we do. We help you protect data, meet compliance requirements, and respond to threats before they impact your business.",
    points: ["Cloud security architecture", "Identity & access management", "Vulnerability assessments", "Security monitoring"],
  },
  {
    image: svcTraining,
    title: "ICT Capacity Building",
    body: "Technology is only powerful if your team can use it. We train your staff and set up processes so internal teams can manage, operate, and grow cloud systems confidently.",
    points: ["Workshops", "Certifications support", "Knowledge transfer", "Documentation"],
  },
  {
    image: svcConsulting,
    title: "IT Consulting & Strategy",
    body: "Not sure where to start? We audit your systems, build a cloud roadmap, and guide technology decisions that align with your business goals.",
    points: ["Cloud readiness assessments", "Cost optimization", "Architecture review", "Digital transformation strategy"],
  },
];

const process = [
  { k: "01", t: "Assess", b: "Understand your systems, goals, and constraints." },
  { k: "02", t: "Migrate", b: "Move workloads to the cloud with minimal disruption." },
  { k: "03", t: "Modernize", b: "Refactor for scale, resilience, and cost-efficiency." },
  { k: "04", t: "Secure", b: "Build compliance and threat response into every layer." },
  { k: "05", t: "Empower", b: "Train your team so they can own what comes next." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
        <FadeIn>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Our Work</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Cloud capabilities,
            <br />
            <em className="gradient-text not-italic">delivered end-to-end.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Lumina is a cloud-native company helping organizations modernize, secure, and scale. We
            partner with businesses to reduce complexity, improve performance, and build the internal
            capacity for technology to actually drive growth.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-8">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <article className="group relative grid gap-0 overflow-hidden rounded-3xl border border-border/60 bg-card md:grid-cols-5">
                <div className={`relative md:col-span-2 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="absolute inset-0 gradient-brand opacity-30" />
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="relative h-full w-full object-cover mix-blend-luminosity opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card" />
                </div>
                <div className="relative p-8 md:col-span-3 md:p-12">
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                    0{i + 1} / Capability
                  </span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">{s.body}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--ember)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <FadeIn>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">How we work</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Assess → Migrate → Modernize → Secure → Empower
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We don't just hand over tech. We stay with you to make sure it works, your team is
            confident, and your systems stay secure.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {process.map((p, i) => (
            <FadeIn key={p.k} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-accent/50">
                <span className="font-display text-3xl text-accent">{p.k}</span>
                <h3 className="mt-3 text-lg font-medium">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <FadeIn>
          <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-background to-card p-10 md:p-16">
            <h2 className="font-display text-4xl md:text-5xl">Let's build it together.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your goals and we'll outline a path from where you are to where you
              want to be.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
