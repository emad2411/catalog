export const metadata = {
  title: "Plan — Catalog",
  description: "Implementation plan for the catalog foundation phase",
};

type Step = { id: string; title: string; status: "done" | "todo" | "blocked" };
type Phase = {
  id: string;
  title: string;
  goal: string;
  steps: Step[];
};

const phases: Phase[] = [
  {
    id: "phase-0",
    title: "Phase 0 — Foundation (this page + housekeeping)",
    goal: "Clean up the test files and add a real layout shell with header and footer.",
    steps: [
      { id: "0.1", title: "Remove the temporary supabase-check.tsx test file", status: "done" },
      { id: "0.2", title: "Clean up the homepage to a true landing page (hero + featured products)", status: "todo" },
      { id: "0.3", title: "Add Header component (logo, nav links to all pages)", status: "todo" },
      { id: "0.4", title: "Add Footer component (company info, legal links, contact)", status: "todo" },
      { id: "0.5", title: "Wire Header + Footer into app/layout.tsx so every page gets them", status: "todo" },
      { id: "0.6", title: "Add shadcn Separator and add 2 more components we'll need (input, label, sonner or basic dialog)", status: "todo" },
    ],
  },
  {
    id: "phase-1",
    title: "Phase 1 — Data layer (Supabase clients + env validation)",
    goal: "Strong, type-safe Supabase access pattern that's correct for Next 16 App Router.",
    steps: [
      { id: "1.1", title: "Install @supabase/ssr (the official Next 16 + cookie-based auth client)", status: "todo" },
      { id: "1.2", title: "Create lib/env.ts that throws at boot if NEXT_PUBLIC_SUPABASE_URL or ANON_KEY are missing", status: "todo" },
      { id: "1.3", title: "Create lib/supabase/server.ts — server-side client (reads cookies, used in server components)", status: "todo" },
      { id: "1.4", title: "Create lib/supabase/client.ts — browser client (used in client components)", status: "todo" },
      { id: "1.5", title: "Generate TypeScript types from the live Supabase schema: npx supabase gen types typescript", status: "todo" },
      { id: "1.6", title: "Save generated types to lib/supabase/types.ts", status: "todo" },
      { id: "1.7", title: "Create lib/queries/products.ts with typed getActiveProducts() and getProductBySlug(slug)", status: "todo" },
      { id: "1.8", title: "Smoke test: call getActiveProducts() from a server component, log the count, deploy, verify live", status: "todo" },
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Real /products list page",
    goal: "Replace the smoke test with a real product catalog that reads from Supabase and renders with shadcn Card + Voltagent design.",
    steps: [
      { id: "2.1", title: "Add shadcn components we'll need: input, label, select, badge (already have), card (already have)", status: "todo" },
      { id: "2.2", title: "Create components/products/ProductCard.tsx — image, title, brand, price, link to detail", status: "todo" },
      { id: "2.3", title: "Create app/products/page.tsx as a Server Component that fetches via getActiveProducts()", status: "todo" },
      { id: "2.4", title: "Render a responsive grid of ProductCard components", status: "todo" },
      { id: "2.5", title: "Handle empty state (no products) and error state", status: "todo" },
      { id: "2.6", title: "Add loading.tsx skeleton for /products", status: "todo" },
      { id: "2.7", title: "Add error.tsx for /products", status: "todo" },
      { id: "2.8", title: "Verify live: /products shows real products with Voltagent design", status: "todo" },
    ],
  },
  {
    id: "phase-3",
    title: "Phase 3 — /products/[slug] detail page",
    goal: "Each product has its own page with full info and a 'Request Quote' CTA.",
    steps: [
      { id: "3.1", title: "Create app/products/[slug]/page.tsx as a Server Component using getProductBySlug()", status: "todo" },
      { id: "3.2", title: "Render full product: image, brand, title, price, long description, specs", status: "todo" },
      { id: "3.3", title: "Add 'Request Quote' button (client component, opens form modal or routes to /contact?product=...)", status: "todo" },
      { id: "3.4", title: "Handle not-found state (invalid slug) with not-found.tsx", status: "todo" },
      { id: "3.5", title: "Add generateStaticParams for the 5 known products to pre-render them", status: "todo" },
      { id: "3.6", title: "Verify live: navigate from /products to a detail page", status: "todo" },
    ],
  },
  {
    id: "phase-4",
    title: "Phase 4 — Stub every reserved route (no 404s, full site shell)",
    goal: "All 10 routes exist as a layout, header, footer, and placeholder content.",
    steps: [
      { id: "4.1", title: "Create app/about/page.tsx — company info placeholder", status: "todo" },
      { id: "4.2", title: "Create app/contact/page.tsx — contact info + simple form (Phase 5 wires it)", status: "todo" },
      { id: "4.3", title: "Create app/terms/page.tsx — terms of service placeholder", status: "todo" },
      { id: "4.4", title: "Create app/privacy/page.tsx — privacy policy placeholder", status: "todo" },
      { id: "4.5", title: "Create app/auth/login/page.tsx — login placeholder (real auth in Phase 6)", status: "todo" },
      { id: "4.6", title: "Create app/auth/register/page.tsx — register placeholder", status: "todo" },
      { id: "4.7", title: "Create app/quotes/page.tsx — customer's quote requests placeholder", status: "todo" },
      { id: "4.8", title: "Add app/not-found.tsx for the global 404 page", status: "todo" },
      { id: "4.9", title: "Verify live: every route in the header returns 200, no 404s", status: "todo" },
    ],
  },
  {
    id: "phase-5",
    title: "Phase 5 — Contact form wired to Supabase",
    goal: "Customers can submit a quote request that lands in the quote_requests table.",
    steps: [
      { id: "5.1", title: "Create app/contact/actions.ts with a Server Action that inserts into quote_requests", status: "todo" },
      { id: "5.2", title: "Build contact form component with shadcn Input, Label, Textarea, Button", status: "todo" },
      { id: "5.3", title: "Add basic validation (name, email required; email format)", status: "todo" },
      { id: "5.4", title: "Show success + error states after submission", status: "todo" },
      { id: "5.5", title: "Verify: submit a test form, confirm row appears in quote_requests via Supabase", status: "todo" },
    ],
  },
  {
    id: "phase-6",
    title: "Phase 6 — Auth (Supabase Auth, customers + admins)",
    goal: "Customers can sign in to track their quote requests. Admins can manage products.",
    steps: [
      { id: "6.1", title: "Add /auth/login — real form using Supabase Auth signInWithPassword()", status: "todo" },
      { id: "6.2", title: "Add /auth/register — real form with signUp()", status: "todo" },
      { id: "6.3", title: "Add /auth/logout", status: "todo" },
      { id: "6.4", title: "Add middleware.ts to protect /quotes and /admin routes", status: "todo" },
      { id: "6.5", title: "Add /quotes — customer sees their own quote_requests (RLS already enforces this)", status: "todo" },
      { id: "6.6", title: "Verify: register, log in, see own quotes only, log out", status: "todo" },
    ],
  },
  {
    id: "phase-7",
    title: "Phase 7 — Populate from fetched_products (109 → live catalog)",
    goal: "Promote the 109 fetched products into the public products table.",
    steps: [
      { id: "7.1", title: "Write a migration script that reads fetched_products where processing_status = 'pending'", status: "todo" },
      { id: "7.2", title: "Map fetched_products fields to products columns (title, price, sku, slug, etc.)", status: "todo" },
      { id: "7.3", title: "Generate slugs (kebab-case from title) and dedupe", status: "todo" },
      { id: "7.4", title: "Insert into products, mark fetched_products row as processed", status: "todo" },
      { id: "7.5", title: "Run once: verify ~100+ products live on /products", status: "todo" },
      { id: "7.6", title: "(Optional) Set up a cron to run the promotion script weekly", status: "todo" },
    ],
  },
];

const statusLabel = {
  done: "✅",
  todo: "⬜",
  blocked: "🚫",
} as const;

const statusText = {
  done: "Done",
  todo: "To do",
  blocked: "Blocked",
} as const;

export default function PlanPage() {
  const total = phases.reduce((acc, p) => acc + p.steps.length, 0);
  const done = phases.reduce(
    (acc, p) => acc + p.steps.filter((s) => s.status === "done").length,
    0,
  );
  const percent = Math.round((done / total) * 100);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Catalog — implementation plan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Foundation phase, 8 phases total, {total} tasks. This page is a living checklist.
        </p>
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Overall progress</span>
            <span className="text-muted-foreground">
              {done} / {total} ({percent}%)
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </header>

      <div className="space-y-10">
        {phases.map((phase) => {
          const phaseDone = phase.steps.filter((s) => s.status === "done").length;
          return (
            <section key={phase.id}>
              <div className="mb-3 flex items-baseline justify-between border-b border-border pb-2">
                <h2 className="text-xl font-semibold">{phase.title}</h2>
                <span className="text-xs text-muted-foreground">
                  {phaseDone} / {phase.steps.length}
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{phase.goal}</p>
              <ul className="space-y-2">
                {phase.steps.map((step) => (
                  <li
                    key={step.id}
                    className="flex items-start gap-3 rounded-md border border-border bg-card px-3 py-2 text-sm"
                  >
                    <span aria-hidden className="mt-0.5 select-none">
                      {statusLabel[step.status]}
                    </span>
                    <span className="flex-1">
                      <span className="mr-2 font-mono text-xs text-muted-foreground">
                        {step.id}
                      </span>
                      {step.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {statusText[step.status]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <footer className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
        Edit <code className="rounded bg-muted px-1">app/plan/page.tsx</code> to
        flip a step from <code>todo</code> to <code>done</code>. Phases are ordered —
        each one depends on the previous.
      </footer>
    </div>
  );
}
