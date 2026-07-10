import Link from "next/link"
import { Button } from "@/components/ui/button"

type Variant = "A" | "B" | "C"

function LogoA() {
  return (
    <svg viewBox="0 0 260 50" className="h-10 w-auto" aria-label="VISTA">
      <text
        x="0"
        y="36"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="38"
        letterSpacing="-1.2"
        fill="currentColor"
      >
        VISTA
      </text>
    </svg>
  )
}

function LogoB() {
  return (
    <svg viewBox="0 0 300 50" className="h-10 w-auto" aria-label="VISTA">
      <g transform="translate(25, 25)">
        <circle
          r="18"
          fill="none"
          stroke="#00d992"
          strokeWidth="2.5"
        />
        <path
          d="M0,-18 L15.6,9 L-15.6,9 Z"
          fill="#00d992"
        />
        <path
          d="M18,0 L-9,15.6 L-9,-15.6 Z"
          fill="#f2f2f2"
          fillOpacity="0.25"
        />
        <path
          d="M0,18 L-15.6,-9 L15.6,-9 Z"
          fill="#f2f2f2"
          fillOpacity="0.15"
        />
      </g>
      <text
        x="58"
        y="36"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="-1.1"
        fill="currentColor"
      >
        VISTA
      </text>
    </svg>
  )
}

function LogoC() {
  return (
    <svg viewBox="0 0 200 50" className="h-10 w-auto" aria-label="VISTA">
      <text
        x="0"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill="#00d992"
      >
        V
      </text>
      <text
        x="30"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="500"
        fontSize="24"
        letterSpacing="-0.3"
        fill="currentColor"
      >
        ista
      </text>
    </svg>
  )
}

function VariantCard({
  letter,
  name,
  tagline,
  Logo,
  notes,
}: {
  letter: Variant
  name: string
  tagline: string
  Logo: React.ComponentType
  notes: string
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-8">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">Variant {letter}</span>
        <span className="text-muted-foreground">{name}</span>
      </div>
      <div className="flex h-32 items-center justify-center rounded-md border border-dashed border-border bg-background">
        <Logo />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{tagline}</p>
      <p className="mt-3 text-xs text-muted-foreground/80">{notes}</p>
    </div>
  )
}

export const metadata = {
  title: "Logo preview — Catalog",
};

export default function LogoPreviewPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Logo preview</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          3 variants using the placeholder name &quot;VISTA&quot; and Voltagent
          design tokens (dark canvas, electric green #00d992, Inter font).
          Replace the name once you decide.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <VariantCard
          letter="A"
          name="Wordmark"
          tagline="VISTA"
          Logo={LogoA}
          notes="Cleanest. Reads as a brand instantly. Nothing distinctive visually — the name does all the work."
        />
        <VariantCard
          letter="B"
          name="Mark + wordmark"
          tagline="[aperture] VISTA"
          Logo={LogoB}
          notes="Distinctive. Works at small sizes (favicon, header). The aperture icon tells the story."
        />
        <VariantCard
          letter="C"
          name="Monogram"
          tagline="V ista"
          Logo={LogoC}
          notes="Modern, minimal (Linear / Vercel style). Less readable at very small sizes."
        />
      </div>

      <section className="mt-12 rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">At small sizes (favicon / header height)</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          How each variant looks at 24px height — typical header logo size.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex h-16 items-center rounded-md border border-dashed border-border bg-background px-4">
            <LogoA />
          </div>
          <div className="flex h-16 items-center rounded-md border border-dashed border-border bg-background px-4">
            <LogoB />
          </div>
          <div className="flex h-16 items-center rounded-md border border-dashed border-border bg-background px-4">
            <LogoC />
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">In a real header context</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          All 3 in a Voltagent-styled top bar.
        </p>
        <div className="mt-6 space-y-4">
          {[LogoA, LogoB, LogoC].map((Logo, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md border border-border bg-background px-6 py-3"
            >
              <div className="flex items-center gap-8">
                <Logo />
                <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
                  <span>Products</span>
                  <span>About</span>
                  <span>Contact</span>
                </nav>
              </div>
              <Button size="sm" variant="outline">Sign in</Button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex justify-between text-sm">
        <Link href="/plan" className="text-muted-foreground hover:text-foreground">
          ← Back to plan
        </Link>
        <span className="text-muted-foreground">
          Tell me which to use and I will build the final Logo component.
        </span>
      </div>
    </div>
  );
}
