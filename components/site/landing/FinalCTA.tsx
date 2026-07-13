import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to get the best price?
        </h2>
        <p className="max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
          Submit your request in under two minutes. Sellers start competing
          immediately.
        </p>
        <Link href="/quote">
          <Button size="lg" className="h-12 px-8 text-base">
            Request Quote
            <ArrowRight className="ml-1.5 size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
