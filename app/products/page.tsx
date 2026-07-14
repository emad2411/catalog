import { Container } from "@/components/site/Container";

export default function ProductsPage() {
  return (
    <Container className="py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Products</h1>
      <p className="mt-4 text-base text-muted-foreground max-w-[65ch]">
        Browse the marketplace and discover verified sellers across categories.
        Ask once, get the best competitive offers.
      </p>
      <div className="mt-12 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
        <p className="text-sm font-mono text-muted-foreground">
          Phase 0 Foundation: Stub active. Real product listings coming in Phase 2.
        </p>
      </div>
    </Container>
  );
}
