export const metadata = {
  title: "Plan — disquote",
  description: "Implementation plan for disquote — a quote-driven marketplace",
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
    title: "Phase 0 — Foundation (brand + site shell + all pages)",
    goal: "Decide brand, create design tokens, build layout shell with header, footer, logo, and every route as a stub.",
    steps: [
      { id: "0.1", title: "Remove the temporary supabase-check.tsx test file", status: "done" },
      { id: "0.2", title: "Decide brand: name (disquote), tagline (Ask once. Get the best price.), logo concept (Q with downward arrow tail)", status: "done" },
      { id: "0.3", title: "Rebrand DESIGN.md — disquote palette (navy-black, emerald-teal, amber, red), JetBrains Mono, marketplace components", status: "done" },
      { id: "0.4", title: "Rebrand globals.css — all CSS variables remapped to disquote oklch tokens + new --brand-* tokens", status: "done" },
      { id: "0.5", title: "Generate brand kit via Nano Banana (3×3 dark-product board, Q logo, competing quotes panel)", status: "done" },
      { id: "0.6", title: "Create components/site/Logo.tsx — Q mark (SVG: circle + emerald downward arrow tail) + 'disquote' wordmark", status: "done" },
      { id: "0.7", title: "Add shadcn components: input, label, textarea, sonner (toast), dropdown-menu, select, dialog, table, skeleton", status: "todo" },
      { id: "0.8", title: "Create components/site/Header.tsx — Logo + nav (Products, About, Contact, Sign in) + 'Request Quote' CTA", status: "todo" },
      { id: "0.9", title: "Create components/site/Footer.tsx — company info, link columns (Products, Company, Legal), contact, copyright", status: "todo" },
      { id: "0.10", title: "Create components/site/Container.tsx — max-width wrapper used by every page", status: "todo" },
      { id: "0.11", title: "Wire Header + Footer into app/layout.tsx so every page gets them automatically", status: "todo" },
      { id: "0.12", title: "Update / homepage to a real landing page (hero: 'Ask once. Get the best price.' + Q logo + CTA → /products + how it works)", status: "todo" },
      { id: "0.13", title: "Create app/about/page.tsx — company story placeholder", status: "todo" },
      { id: "0.14", title: "Create app/contact/page.tsx — contact info + simple form (wired in Phase 4)", status: "todo" },
      { id: "0.15", title: "Create app/terms/page.tsx — terms of service placeholder", status: "todo" },
      { id: "0.16", title: "Create app/privacy/page.tsx — privacy policy placeholder", status: "todo" },
      { id: "0.17", title: "Create app/auth/login/page.tsx — login placeholder (real auth in Phase 5)", status: "todo" },
      { id: "0.18", title: "Create app/auth/register/page.tsx — register placeholder (real auth in Phase 5)", status: "todo" },
      { id: "0.19", title: "Create app/quotes/page.tsx — customer's quote requests placeholder (real data in Phase 4)", status: "todo" },
      { id: "0.20", title: "Add app/not-found.tsx — global 404 page with link back to /", status: "todo" },
      { id: "0.21", title: "Remove old /logo-preview and /logo-shapes pages (replaced by Logo component)", status: "todo" },
      { id: "0.22", title: "Verify live: every nav link returns 200, no 404s, disquote design is consistent across all pages", status: "todo" },
    ],
  },
  {
    id: "phase-1",
    title: "Phase 1 — Data layer (Supabase clients + env validation + DAL)",
    goal: "Strong, type-safe Supabase access pattern with a Data Access Layer — correct for Next 16 App Router.",
    steps: [
      { id: "1.1", title: "Install @supabase/ssr (cookie-based auth client for Next 16)", status: "todo" },
      { id: "1.2", title: "Create lib/env.ts — throws at boot if NEXT_PUBLIC_SUPABASE_URL or ANON_KEY are missing", status: "todo" },
      { id: "1.3", title: "Create lib/supabase/server.ts — server-side client (reads cookies, used in server components)", status: "todo" },
      { id: "1.4", title: "Create lib/supabase/client.ts — browser client (used in client components)", status: "todo" },
      { id: "1.5", title: "Generate TypeScript types from live Supabase schema (supabase gen types typescript)", status: "todo" },
      { id: "1.6", title: "Save generated types to src/types/database.types.ts", status: "todo" },
      { id: "1.7", title: "Create src/dal/product.dal.ts — getActiveProducts(), getProductBySlug(slug), serialize Decimal → string", status: "todo" },
      { id: "1.8", title: "Create src/dal/quote.dal.ts — createQuoteRequest(), getQuotesByUser(), getQuoteComparison(quoteId)", status: "todo" },
      { id: "1.9", title: "Smoke test: call getActiveProducts() from a server component, log count, deploy, verify live", status: "todo" },
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Real /products list page",
    goal: "Replace the smoke test with a real product catalog reading from Supabase via DAL, rendered with disquote design.",
    steps: [
      { id: "2.1", title: "Add shadcn components: select, badge (have), card (have), skeleton, input, label", status: "todo" },
      { id: "2.2", title: "Create components/products/ProductCard.tsx — image, title, brand, price in JetBrains Mono, link to detail", status: "todo" },
      { id: "2.3", title: "Create app/products/page.tsx as Server Component fetching via getActiveProducts() DAL", status: "todo" },
      { id: "2.4", title: "Render responsive grid of ProductCard components", status: "todo" },
      { id: "2.5", title: "Add search bar + category tags (emerald selected state) wired to URL query params", status: "todo" },
      { id: "2.6", title: "Handle empty state (no products) and error state", status: "todo" },
      { id: "2.7", title: "Add loading.tsx skeleton for /products", status: "todo" },
      { id: "2.8", title: "Add error.tsx for /products", status: "todo" },
      { id: "2.9", title: "Verify live: /products shows real products with disquote design", status: "todo" },
    ],
  },
  {
    id: "phase-3",
    title: "Phase 3 — /products/[slug] detail page + quote request",
    goal: "Each product has its own page with full info and a 'Request Quote' CTA that starts the quote flow.",
    steps: [
      { id: "3.1", title: "Create app/products/[slug]/page.tsx as Server Component using getProductBySlug() DAL", status: "todo" },
      { id: "3.2", title: "Render full product: image, brand, title, price in JetBrains Mono, description, specs", status: "todo" },
      { id: "3.3", title: "Add 'Request Quote' button (client component → opens quote request form or routes to /quote?product=slug)", status: "todo" },
      { id: "3.4", title: "Handle not-found state (invalid slug) with not-found.tsx", status: "todo" },
      { id: "3.5", title: "Add generateStaticParams for known products to pre-render them", status: "todo" },
      { id: "3.6", title: "Verify live: navigate from /products to detail page, see quote CTA", status: "todo" },
    ],
  },
  {
    id: "phase-4",
    title: "Phase 4 — Quote flow (request → compete → compare)",
    goal: "Buyer submits a quote request, sellers respond with competing prices, buyer sees a comparison card with best-price highlight.",
    steps: [
      { id: "4.1", title: "Create app/quote/page.tsx — quote request form (search product, select quantity, add notes)", status: "todo" },
      { id: "4.2", title: "Create src/server-actions/quote.ts — createQuoteRequest() Server Action with Zod validation + requireAuth()", status: "todo" },
      { id: "4.3", title: "Create src/schemas/quote.schema.ts — Zod schema for quote request input", status: "todo" },
      { id: "4.4", title: "Create components/quotes/QuoteComparisonCard.tsx — competing seller rows with emerald border on best price", status: "todo" },
      { id: "4.5", title: "Create components/quotes/BestPriceBadge.tsx — amber pill 'Best price'", status: "todo" },
      { id: "4.6", title: "Create components/quotes/PriceDropIndicator.tsx — red pill '↓ $X' savings badge", status: "todo" },
      { id: "4.7", title: "Create app/quotes/[id]/page.tsx — quote detail with comparison + accept button", status: "todo" },
      { id: "4.8", title: "Add toast notifications (sonner) for quote submitted, new quote received, price update", status: "todo" },
      { id: "4.9", title: "Verify: submit test quote request, confirm row in quote_requests via Supabase", status: "todo" },
    ],
  },
  {
    id: "phase-5",
    title: "Phase 5 — Auth (Supabase Auth, customers + admins)",
    goal: "Customers sign in to track their quote requests. Admins manage products. DAL authorization guards protect mutations.",
    steps: [
      { id: "5.1", title: "Wire /auth/login — real form using Supabase Auth signInWithPassword()", status: "todo" },
      { id: "5.2", title: "Wire /auth/register — real form with signUp() + email verification", status: "todo" },
      { id: "5.3", title: "Add /auth/logout — sign out route", status: "todo" },
      { id: "5.4", title: "Create lib/auth.ts — getServerSession() + requireAdmin() guard pattern", status: "todo" },
      { id: "5.5", title: "Add proxy.ts (Next 16 replaces middleware.ts) to protect /quotes and /admin routes", status: "todo" },
      { id: "5.6", title: "Wire /quotes — customer sees their own quote_requests (RLS enforced)", status: "todo" },
      { id: "5.7", title: "Verify: register, log in, see own quotes only, log out", status: "todo" },
    ],
  },
  {
    id: "phase-6",
    title: "Phase 6 — Seller dashboard",
    goal: "Sellers can view incoming quote requests, submit competing prices, and manage their inventory.",
    steps: [
      { id: "6.1", title: "Create app/seller/page.tsx — dashboard: incoming quote requests list", status: "todo" },
      { id: "6.2", title: "Create app/seller/quotes/[id]/page.tsx — quote detail with 'Submit Price' form", status: "todo" },
      { id: "6.3", title: "Create src/server-actions/seller.ts — submitQuotePrice() with requireSeller() guard + Zod validation", status: "todo" },
      { id: "6.4", title: "Notify buyer when new quote arrives (Supabase Realtime or polling)", status: "todo" },
      { id: "6.5", title: "Verify: seller logs in, sees quote request, submits price, buyer sees comparison update", status: "todo" },
    ],
  },
  {
    id: "phase-7",
    title: "Phase 7 — Populate from fetched_products (109 → live catalog)",
    goal: "Promote the 109 fetched products into the public products table with slugs and images.",
    steps: [
      { id: "7.1", title: "Write migration script reading fetched_products where processing_status = 'pending'", status: "todo" },
      { id: "7.2", title: "Map fetched_products fields → products columns (title, price, sku, slug, brand, category, image_url)", status: "todo" },
      { id: "7.3", title: "Generate slugs (kebab-case from title) and dedupe", status: "todo" },
      { id: "7.4", title: "Insert into products, mark fetched_products as processed", status: "todo" },
      { id: "7.5", title: "Run once: verify ~100+ products live on /products with images", status: "todo" },
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
        <h1 className="text-3xl font-semibold tracking-tight">disquote — implementation plan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Quote-driven marketplace, {phases.length} phases, {total} tasks.
          Ask once. Get the best price.
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