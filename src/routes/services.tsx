import { createFileRoute, Link } from "@tanstack/react-router";
import { Cloud, Code2, Database, Workflow, Shield, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lumina" },
      { name: "description", content: "Cloud migration, application development, data analytics, digital transformation, security, and AI enablement from Lumina." },
      { property: "og:title", content: "Services — Lumina" },
      { property: "og:description", content: "Cloud-native services to modernize, scale, and transform your business." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    body: "Assess, architect, and migrate workloads to AWS, Azure, or GCP with minimal disruption and maximum value.",
    points: ["Discovery & assessment", "Landing zones", "Lift-shift-modernize", "Cost optimization"],
  },
  {
    icon: Code2,
    title: "Application Development",
    body: "Cloud-native applications engineered with modern stacks — built to perform, scale, and delight.",
    points: ["Web & mobile apps", "APIs & microservices", "Serverless architectures", "DevOps & CI/CD"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    body: "Modern data platforms that turn raw signals into clear, actionable insight across your business.",
    points: ["Data lakes & warehouses", "Real-time pipelines", "BI dashboards", "ML & forecasting"],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    body: "End-to-end programs that align strategy, technology, and people around measurable outcomes.",
    points: ["Operating model", "Platform strategy", "Change enablement", "Delivery acceleration"],
  },
  {
    icon: Shield,
    title: "Cloud Security",
    body: "Secure-by-design foundations with identity, governance, and continuous compliance.",
    points: ["Zero-trust identity", "Policy as code", "Threat detection", "Compliance baselines"],
  },
  {
    icon: Sparkles,
    title: "AI Enablement",
    body: "Practical, production-grade AI woven into the products and processes that move your business.",
    points: ["LLM applications", "RAG & assistants", "MLOps", "Responsible AI"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Services</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          Cloud capabilities,
          <br />
          delivered end-to-end.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From migration to modernization to intelligent applications — Lumina assembles the right
          team and the right architecture for every stage of your cloud journey.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <s.icon className="h-8 w-8 text-primary" />
                <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Capability
                </span>
              </div>
              <h2 className="mt-6 font-display text-2xl md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_var(--glow)]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-card via-background to-card p-10 md:p-16">
          <h2 className="font-display text-4xl md:text-5xl">Let's build it together.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tell us about your goals and we'll outline a path from where you are to where you want
            to be.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow"
          >
            Start the conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
