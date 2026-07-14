"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

/**
 * Client-only interactive button. Isolated so the 404 page itself can stay
 * a Server Component. Navigation is programmatic (useRouter) because the
 * shadcn Button has no `asChild` (Base UI) — it can't wrap a <Link>.
 */
export function ReturnHomeButton() {
  const router = useRouter();

  return (
    <Button size="lg" className="mt-8 px-6" onClick={() => router.push("/")}>
      Return Home
    </Button>
  );
}
