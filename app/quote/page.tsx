import { Container } from "@/components/site/Container";

export default function QuotePage() {
  return (
    <Container className="py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Request a Quote</h1>
      <p className="mt-4 text-base text-muted-foreground max-w-[65ch]">
        Tell us what you need and let verified sellers compete to give you the
        best price. Build your request once, compare offers in one place.
      </p>
      <div className="mt-12 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
        <p className="text-sm font-mono text-muted-foreground">
          Phase 0 Foundation: Stub active. Full quote builder coming in Phase 4.
        </p>
      </div>
    </Container>
  );
}
