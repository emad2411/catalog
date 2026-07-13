"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Camera, Aperture, Lightbulb, Backpack } from "lucide-react";

import { Card } from "@/components/ui/card";

const categories = [
  { name: "Cameras", icon: Camera, href: "/products?cat=cameras" },
  { name: "Lenses", icon: Aperture, href: "/products?cat=lenses" },
  { name: "Lighting", icon: Lightbulb, href: "/products?cat=lighting" },
  { name: "Accessories", icon: Backpack, href: "/products?cat=accessories" },
];

export function Categories() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Browse by category
        </h2>

        {/* horizontal scroll-snap pills */}
        <div className="flex gap-4 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory] md:grid md:grid-cols-4 md:overflow-visible">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.name}
              cat={cat}
              i={i}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Category card, built on the shadcn `Card` primitive used purely as the
 * container. The `Link` stays the `group` / click target, so the hover state
 * is driven by `group-hover:` on the Card. `ring-0` zeroes Card's default
 * `ring-1 ring-foreground/10`.
 */
function CategoryCard({
  cat,
  i,
  reduce,
}: {
  cat: (typeof categories)[number];
  i: number;
  reduce: boolean | null;
}) {
  const Icon = cat.icon;
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="[scroll-snap-align:start]"
    >
      <Link href={cat.href} className="group block min-w-[200px] md:min-w-0">
        <Card className="flex w-full flex-col gap-3 rounded-xl border border-border bg-card p-6 ring-0 transition-all group-hover:border-primary/40 group-hover:bg-card/80">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="size-6 text-primary" />
          </div>
          <span className="text-base font-medium text-foreground">
            {cat.name}
          </span>
          <span className="text-sm text-muted-foreground transition-colors group-hover:text-primary">
            Request a quote →
          </span>
        </Card>
      </Link>
    </motion.div>
  );
}
