import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Cloud, Code2, Database, Sparkles, Shield, Workflow } from "lucide-react";
import { LuminaCanvas } from "../components/LuminaCanvas";
import cloudNetwork from "../assets/cloud-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Illuminating the future of cloud" },
      { name: "description", content: "Lumina is a cloud-native technology partner helping businesses modernize, scale, and transform with secure, intelligent applications." },
      { property: "og:title", content: "Lumina — Illuminating the future of cloud" },
      { property: "og:description", content: "Cloud migration, application development, data analytics, and digital transformation — designed to scale." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Cloud, title: "Cloud Migration", body: "Move workloads to the cloud with confidence — assess, architect, and migrate without disruption." },
  { icon: Code2, title: "Application Development", body: "Cloud-native applications engineered for performance, scale, and beautiful user experiences." },
  { icon: Database, title: "Data & Analytics", body: "Turn raw data into decisions with modern data platforms, pipelines, and intelligent insights." },
  { icon: Workflow, title: "Digital Transformation", body: "Reimagine processes end-to-end — strategy, architecture, and delivery aligned to outcomes." },
  { icon: Shield, title: "Cloud Security", body: "Secure-by-design foundations: identity, governance, and continuous compliance baked in." },
  { icon: Sparkles, title: "AI Enablement", body: "Embed intelligence into products and operations with practical, production-ready AI." },
];

const values = [
  { k: "01", title: "Innovation", body: "We drive innovation through cutting-edge technology and creative problem-solving." },
  { k: "02", title: "Customer Centricity", body: "We put our clients at the heart of everything we do." },
  { k: "03", title: "Excellence", body: "We strive for excellence in every line of code and every conversation." },
  { k: "04", title: "Collaboration", body: "We believe in the power of partnership to achieve something greater." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate -mt-24 flex min-h-[100svh] items-center overflow-hidden pt-24">
        <LuminaCanvas className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
              Cloud-native technology partner
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Illuminating
              <br />
              the future of <em className="gradient-text not-italic">cloud</em>.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Lumina empowers businesses to transform, modernize, and scale their applications and
              data with cutting-edge cloud solutions — delivered with light-speed and limitless
              possibility.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-muted"
              >
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* corner glints */}
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* PROOF / INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Who we are</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A cloud-native partner for the next era of business.
            </h2>
          </div>
          <p className="text-base text-muted-foreground md:col-span-5">
            We specialize in cloud migration, application development, data analytics, and digital
            transformation — helping clients unlock the full potential of their digital assets.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl">What we do</h2>
          <Link to="/services" className="hidden text-sm text-primary hover:text-foreground md:inline-flex">
            See all services →
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-background p-8 transition-colors hover:bg-card"
            >
              <s.icon className="h-7 w-7 text-primary transition-transform group-hover:-translate-y-0.5" />
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Mission</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
              Empower digital transformation through innovative cloud solutions — delivering scalable,
              secure, and intelligent applications that illuminate the future of our clients.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Vision</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
              To be the leading cloud technology partner — harnessing light-speed technology, limitless
              possibilities, and a passion for excellence to drive innovation worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Core values</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">The principles that guide us.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.k} className="rounded-2xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-primary/40">
              <span className="font-display text-3xl text-primary">{v.k}</span>
              <h3 className="mt-4 text-lg font-medium">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card">
          <img
            src={cloudNetwork}
            alt=""
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative grid gap-8 p-10 md:grid-cols-2 md:items-center md:p-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Ready to <em className="gradient-text not-italic">illuminate</em> what's next?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Let's talk about where you are, where you're going, and how Lumina can light the way.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-glow"
              >
                Book an intro call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
