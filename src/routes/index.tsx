import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Cloud, Code2, Shield, GraduationCap, Compass } from "lucide-react";
import { LuminaCanvas } from "../components/LuminaCanvas";
import { FadeIn } from "../components/FadeIn";
import cloudNetwork from "../assets/cloud-network.jpg";
import svcMigration from "../assets/svc-migration.jpg";
import svcAppdev from "../assets/svc-appdev.jpg";
import svcSecurity from "../assets/svc-security.jpg";
import svcTraining from "../assets/svc-training.jpg";
import svcConsulting from "../assets/svc-consulting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Cloud Migration & Cloud-Native Solutions" },
      { name: "description", content: "Lumina is a cloud migration company delivering cloud-native solutions, infrastructure modernization, cloud security services, DevOps, ICT training, and digital transformation across Nigeria and beyond." },
      { property: "og:title", content: "Lumina — Cloud Migration & Cloud-Native Solutions" },
      { property: "og:description", content: "Cloud migration, cloud-native application development, IT security, ICT capacity building, and IT consulting — built to scale." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Cloud, image: svcMigration, title: "Cloud Migration & Modernization", body: "Move workloads to the cloud with minimal downtime — then modernize for scale, speed, and cost." },
  { icon: Code2, image: svcAppdev, title: "Cloud-Native Application Development", body: "Microservices, serverless, and DevOps pipelines built for the cloud from day one." },
  { icon: Shield, image: svcSecurity, title: "IT Security & Compliance", body: "Cloud security architecture, IAM, threat monitoring, and continuous compliance built in." },
  { icon: GraduationCap, image: svcTraining, title: "ICT Capacity Building", body: "Workshops, certifications support, and knowledge transfer so your team can own the cloud." },
  { icon: Compass, image: svcConsulting, title: "IT Consulting & Strategy", body: "Cloud readiness, cost optimization, architecture review, and digital transformation strategy." },
];

const process = [
  { k: "01", t: "Assess" },
  { k: "02", t: "Migrate" },
  { k: "03", t: "Modernize" },
  { k: "04", t: "Secure" },
  { k: "05", t: "Empower" },
];

const values = [
  { k: "01", title: "Innovation", body: "We drive innovation through cutting-edge technology and creative problem-solving." },
  { k: "02", title: "Customer Centricity", body: "We put our clients at the heart of everything we do." },
  { k: "03", title: "Excellence", body: "We strive for excellence in every line of code and every conversation." },
  { k: "04", title: "Collaboration", body: "We believe partnership is how anything great gets built." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate -mt-24 flex min-h-[100svh] items-center overflow-hidden pt-24">
        <LuminaCanvas className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[140px]" />


        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--ember)]" />
              Cloud-native technology partner
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Illuminating
              <br />
              the future of <em className="gradient-text not-italic">cloud</em>.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Lumina helps organizations modernize, secure, and scale in the cloud. We reduce
              complexity, improve performance, and build internal capacity so technology actually
              drives growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
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
      </section>

      {/* INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Who we are</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                A cloud-native partner for the next era of business.
              </h2>
            </div>
            <p className="text-base text-muted-foreground md:col-span-5">
              Lumina is a cloud-native company partnering with businesses to reduce complexity,
              improve performance, and build the internal capacity for technology to actually drive
              growth.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl">What we do</h2>
            <Link to="/services" className="hidden text-sm text-accent hover:text-foreground md:inline-flex">
              See all services →
            </Link>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-colors hover:border-accent/40">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <s.icon className="absolute bottom-4 left-4 h-7 w-7 text-primary-foreground drop-shadow-[0_0_12px_var(--glow)]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <FadeIn key={p.k} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-border/60 bg-background/40 p-6">
                <span className="font-display text-3xl text-accent">{p.k}</span>
                <h3 className="mt-3 text-lg font-medium">{p.t}</h3>
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Mission</p>
              <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                Empower digital transformation through innovative cloud solutions — delivering
                scalable, secure, and intelligent applications that illuminate the future of our
                clients.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

              <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Vision</p>
              <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                To be the leading cloud technology partner — harnessing light-speed technology,
                limitless possibilities, and a passion for excellence to drive innovation worldwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Core values</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">The principles that guide us.</h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.k} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border/60 bg-background/40 p-6 transition-colors hover:border-accent/40">
                <span className="font-display text-3xl text-accent">{v.k}</span>
                <h3 className="mt-4 text-lg font-medium">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card">
            <img
              src={cloudNetwork}
              alt=""
              loading="lazy"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/85 to-card/40" />
            <div className="relative grid gap-8 p-10 md:grid-cols-2 md:items-center md:p-16">
              <div>
                <h2 className="font-display text-4xl md:text-5xl">
                  Ready to <em className="gradient-text not-italic">illuminate</em> what's next?
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Let's talk about where you are, where you're going, and how Lumina can light the
                  way.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-glow"
                >
                  Book an intro call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
