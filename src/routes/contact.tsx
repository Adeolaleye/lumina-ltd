import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Lumina" },
      { name: "description", content: "Talk to Lumina about cloud migration, cloud-native development, IT security, ICT training, and consulting. Email contact@luminalabsltd.com." },
      { property: "og:title", content: "Contact - Lumina" },
      { property: "og:description", content: "Start a conversation with Lumina about your cloud transformation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="grid gap-16 md:grid-cols-2">
        <FadeIn>
          <p className="font-sans text-sm font-bold uppercase tracking-[0.22em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
            Let's build what's next.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Share a few details about your project and our team will get back within one business
            day.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <p className="text-muted-foreground">Email</p>
                <a href="mailto:contact@luminalabsltd.com" className="text-foreground hover:text-accent">
                  contact@luminalabsltd.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <p className="text-muted-foreground">Company</p>
                <p className="text-foreground">Lumina Labs Limited</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border/60 bg-card p-8 md:p-10"
            >
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
                    <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                  </div>
                  <h2 className="font-display text-2xl">Message received.</h2>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out - we'll be in touch shortly to discuss next steps.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Name" name="name" placeholder="Your full name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                  <Field label="Company" name="company" placeholder="Company name" />
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, or challenge…"
                      className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
