"use client";

import { motion, useReducedMotion } from "motion/react";

// mock data — replace with real metrics when available
const stats = [
  { value: "2,400+", label: "Quotes requested" },
  { value: "180", label: "Verified sellers" },
  { value: "37%", label: "Avg. savings" },
];

export function StatsStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border/40 bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="font-mono text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
