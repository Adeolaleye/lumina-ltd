import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lumina" },
      { name: "description", content: "Lumina is a cloud-native technology company empowering digital transformation through innovative, secure, and intelligent applications." },
      { property: "og:title", content: "About — Lumina" },
      { property: "og:description", content: "Our mission, vision, and the values that guide how we build with our clients." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { k: "01", t: "Innovation", b: "We drive innovation through cutting-edge technology and creative problem-solving." },
  { k: "02", t: "Customer Centricity", b: "We put our clients at the heart of everything we do." },
  { k: "03", t: "Excellence", b: "We strive for excellence in all aspects of our work." },
  { k: "04", t: "Collaboration", b: "We believe in the power of collaboration to achieve greatness." },
];

function AboutPage() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">About Lumina</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
          A cloud-native team illuminating the path forward.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Lumina Labs is a cloud-native technology company that empowers businesses to transform,
          modernize, and scale their applications and data with cutting-edge cloud solutions. We
          specialize in cloud migration, application development, data analytics, and digital
          transformation — helping our clients unlock the full potential of their digital assets.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Mission</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-[1.75rem]">
              To empower digital transformation through innovative cloud solutions. We deliver
              scalable, secure, and intelligent applications that drive business growth, enhance
              customer experiences, and illuminate the future of our clients.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Vision</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-[1.75rem]">
              To be the leading cloud technology partner, driving innovation and growth for
              businesses worldwide by harnessing the power of light-speed technology, limitless
              possibilities, and a passion for excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Core values</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">How we show up.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.k} className="bg-background p-8">
              <span className="font-display text-3xl text-primary">{v.k}</span>
              <h3 className="mt-4 text-lg font-medium">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-border/60 bg-card p-10 md:p-16">
          <h2 className="max-w-3xl font-display text-3xl md:text-5xl">
            Looking for a partner who can move at light speed without compromising on craft?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
