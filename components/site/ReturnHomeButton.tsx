"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Client component — required because Base UI's `render` function form is a
 * function, and Base UI's Button is a client component (functions can't cross
 * the server→client boundary). This is the Base UI equivalent of Radix's
 * `asChild`: the function spreads the button's props onto <Link>, producing a
 * single styled <a href="/">. The 404 page itself stays a Server Component.
 */
export function ReturnHomeButton() {
  return (
    <Button
      size="lg"
      className="mt-8 px-6"
      render={(props) => <Link {...props} href="/" />}
    >
      Return Home
    </Button>
  );
}
