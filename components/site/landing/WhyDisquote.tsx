"use client";

import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Eye, Clock, Coins } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Sellers compete, you save",
    body: "When sellers see your request, they lower prices to win your business. The market works for you, not against you.",
    span: "md:col-span-2",
    visual: "image",
  },
  {
    icon: ShieldCheck,
    title: "Verified sellers only",
    body: "Every seller is vetted. No random listings, no scams.",
    span: "",
    visual: "gradient",
  },
  {
    icon: Eye,
    title: "Transparent quotes",
    body: "See every price, delivery time, and seller rating side by side. No hidden fees.",
    span: "",
    visual: "text",
  },
  {
    icon: Clock,
    title: "Save hours of negotiation",
    body: "One request replaces dozens of tabs, emails, and haggling. Sellers come to you with their best price upfront.",
    span: "md:col-span-2",
    visual: "pattern",
  },
];

export function WhyDisquote() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why disquote
        </h2>

        {/* bento grid — 4 items, 4 cells, mixed sizes */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-border p-5 ${feature.span}`}
              >
                {/* visual treatment per cell */}
                {feature.visual === "image" && (
                  <div
                    className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                    style={{
                      backgroundImage:
                        "url(https://picsum.photos/seed/disquote-marketplace-competition/800/400)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}
                {feature.visual === "gradient" && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-primary) 0%, transparent 60%)",
                    }}
                  />
                )}
                {feature.visual === "pattern" && (
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, var(--brand-primary) 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}

                {/* content layer */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
