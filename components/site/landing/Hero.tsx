"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, TrendingDown, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * Hero — asymmetric split.
 * Left: badge + headline + subtext + 2 CTAs.
 * Right: real product UI preview (quote comparison cards, not a fake screenshot).
 */
export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      };

  const sellers = [
    { name: "ProAudio NYC", price: "$2,498", delivery: "3 days", best: false },
    { name: "LensHouse", price: "$2,399", delivery: "2 days", best: false },
    { name: "CameraWorld", price: "$2,250", delivery: "Free 2-day", best: true },
  ];

  return (
    <section className="relative min-h-[85dvh] overflow-hidden border-b border-border/40">
      {/* subtle radial glow from top-right, emerald-teal, very low opacity */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto flex min-h-[85dvh] max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
        {/* === LEFT: copy === */}
        <div className="flex w-full flex-col items-center gap-5 text-center lg:max-w-xl lg:items-start lg:text-left">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <Badge variant="outline" className="border-border/60 text-brand-body">
              Quote-driven marketplace
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-left lg:text-6xl"
          >
            Ask once.
            <br />
            Get the best price.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[65ch] text-center text-lg leading-relaxed text-muted-foreground lg:text-left"
          >
            Submit a single request for the gear you want. Verified sellers
            compete on price. You pick the lowest quote.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link href="/quote">
              <Button size="lg" className="h-11 px-6 text-base">
                Request Quote
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-6 text-base"
              >
                Browse Products
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* === RIGHT: real product UI preview === */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:flex-1 lg:max-w-md"
        >
          <QuoteComparisonPreviewCard sellers={sellers} />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Quote comparison card, built on the shadcn `Card` primitive used purely as
  * the container (no CardHeader/CardContent/CardFooter slots) with the same
  * inner content structure as the original raw-div version. `Card` ships a
  * default `ring-1 ring-foreground/10`, so we zero it with `ring-0` to match
  * the border-only styling.
  */
 function QuoteComparisonPreviewCard({
  sellers,
}: {
  sellers: {
    name: string;
    price: string;
    delivery: string;
    best: boolean;
  }[];
}) {
  return (
    <Card className="hero-card-float rounded-xl border border-border bg-card p-5 shadow-lg shadow-black/20 ring-0">
      {/* product header */}
      <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-4">
        <div>
          <p className="text-sm font-medium text-foreground">
            Sony A7 IV
          </p>
          <p className="text-xs text-muted-foreground">Body only</p>
        </div>
        <Badge variant="secondary" className="font-mono">
          3 quotes
        </Badge>
      </div>

      {/* competing quotes — descending price */}
      <div className="flex flex-col gap-2.5">
        {sellers.map((seller) => (
          <div
            key={seller.name}
            className={
              seller.best
                ? "flex items-center justify-between rounded-lg border border-primary/50 bg-primary/5 px-4 py-3"
                : "flex items-center justify-between rounded-lg border border-border/40 px-4 py-3"
            }
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-foreground">
                {seller.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {seller.delivery}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {seller.best && (
                <span className="flex items-center gap-1 text-xs font-medium text-primary">
                  <Check className="size-3.5" />
                  Best
                </span>
              )}
              <span
                className={
                  seller.best
                    ? "font-mono text-lg font-semibold text-primary"
                    : "font-mono text-base text-muted-foreground"
                }
              >
                {seller.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* savings indicator */}
      <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-4">
        <TrendingDown className="size-4 text-primary" />
        <span className="text-sm text-muted-foreground">
          You save{" "}
          <span className="font-mono font-medium text-primary">$248</span>{" "}
          vs. highest quote
        </span>
      </div>
    </Card>
  );
}
