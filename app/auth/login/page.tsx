"use client";
import { Container } from "@/components/site/Container";

export default function Page() {
  return (
    <Container className="py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Sign In</h1>
      <p className="mt-4 text-base text-muted-foreground max-w-[65ch]">
        Welcome back. Access your quotes and manage your requests.
      </p>
      <div className="mt-12 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
        <p className="text-sm font-mono text-muted-foreground">
          Phase 0 Foundation: Stub active. Full implementation coming in Phase 4 & 5.
        </p>
      </div>
    </Container>
  );
}
