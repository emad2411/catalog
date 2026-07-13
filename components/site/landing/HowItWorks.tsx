"use client";

import { motion, useReducedMotion } from "motion/react";
import { FileText, Swords, Trophy } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit your request",
    body: "Tell us what you need. One form, one time. No browsing dozens of stores.",
  },
  {
    icon: Swords,
    title: "Sellers compete",
    body: "Verified sellers see your request and undercut each other on price in real time.",
  },
  {
    icon: Trophy,
    title: "Pick the best quote",
    body: "Compare quotes side by side. Choose the lowest price, best delivery, or top-rated seller.",
  },
];

// TODO: replace with your actual explainer video ID (the part after ?v= in the YouTube link)
const YOUTUBE_VIDEO_ID = "YOUR_VIDEO_ID";

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How it works
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* steps — below the video on mobile, left column on desktop */}
          <ol className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-7">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="max-w-[45ch] text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          {/* video — top on mobile (hook), right column on desktop */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="How disquote works"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Watch how disquote works in action
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
