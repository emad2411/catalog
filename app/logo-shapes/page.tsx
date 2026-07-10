import Link from "next/link"
import { Button } from "@/components/ui/button"

type Variant = "A" | "B" | "C" | "D"

function LogoAbstractBasket() {
  return (
    <svg viewBox="0 0 300 50" className="h-10 w-auto" aria-label="VISTA">
      <g transform="translate(25, 25)">
        {/* Modern "Gear Case" style basket - geometric, no handles, technical */}
        <path 
          d="M-15, -10 L15, -10 L12, 12 L-12, 12 Z" 
          fill="none" 
          stroke="#00d992" 
          strokeWidth="3" 
        />
        <path 
          d="M-10, -10 L-10, 12 M0, -10 L0, 12 M10, -10 L10, 12" 
          stroke="#00d992" 
          strokeWidth="1.5" 
          opacity="0.5" 
        />
        <circle r="4" fill="#f2f2f2" cx="0" cy="-15" />
      </g>
      <text
        x="60"
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

function LogoOpticalPrism() {
  return (
    <svg viewBox="0 0 300 50" className="h-10 w-auto" aria-label="VISTA">
      <g transform="translate(25, 25)">
        {/* Hexagonal Sensor / Prism shape */}
        <path 
          d="M0,-16 L14,-8 L14,8 L0,16 L-14,8 L-14,-8 Z" 
          fill="none" 
          stroke="#00d992" 
          strokeWidth="2.5" 
        />
        <path 
          d="M0,-16 L0,16 M-14,8 L14,-8 M-14,-8 L14,8" 
          stroke="#00d992" 
          strokeWidth="1" 
          opacity="0.4" 
        />
        <circle r="3" fill="currentColor" />
      </g>
      <text
        x="60"
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

function LogoViewfinder() {
  return (
    <svg viewBox="0 0 300 50" className="h-10 w-auto" aria-label="VISTA">
      <g transform="translate(25, 25)">
        {/* Precision Brackets [ ] */}
        <path d="M-16,-16 L-6,-16 L-6,-6" stroke="#f2f2f2" strokeWidth="3" fill="none" />
        <path d="M16,-16 L6,-16 L6,-6" stroke="#f2f2f2" strokeWidth="3" fill="none" />
        <path d="M-16,16 L-6,16 L-6,6" stroke="#f2f2f2" strokeWidth="3" fill="none" />
        <path d="M16,16 L6,16 L6,6" stroke="#00d992" strokeWidth="3" fill="none" />
        <circle r="2" fill="#00d992" cx="0" cy="0" />
      </g>
      <text
        x="60"
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

function LogoPureSymbol({ type }: { type: "BASKET" | "PRISM" | "VIEW" }) {
  if (type === "BASKET") return <LogoAbstractBasket />;
  if (type === "PRISM") return <LogoOpticalPrism />;
  return <LogoViewfinder />;
}

function VariantCard({
  label,
  description,
  Logo,
  notes,
}: {
  label: string
  description: string
  Logo: React.ComponentType
  notes: string
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-8">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">{label}</span>
      </div>
      <div className="flex h-32 items-center justify-center rounded-md border border-dashed border-border bg-background">
        <Logo />
      </div>
      <p className="mt-4 text-sm font-medium">{description}</p>
      <p className="mt-3 text-xs text-muted-foreground/80">{notes}</p>
    </div>
  )
}

export const metadata = {
  title: "Logo Shapes Preview — Catalog",
};

export default function LogoShapesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Shape-Based Logos</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Moving beyond simple text to "abstract shapes". We use the Voltagent 
          palette: Electric Green (#00d992) and Ink (#f2f2f2).
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <VariantCard
          label="S-BASKET"
          description="Abstract Gear Basket"
          Logo={LogoAbstractBasket}
          notes="Not a grocery basket. A geometric, technical gear case. Modern commerce vibe."
        />
        <VariantCard
          label="S-PRISM"
          description="Optical Prism / Sensor"
          Logo={LogoOpticalPrism}
          notes="Hexagonal shape inspired by camera sensors and light prisms. Precision and tech."
        />
        <VariantCard
          label="S-VIEW"
          description="The Viewfinder"
          Logo={LogoViewfinder}
          notes="Precision brackets [ ]. Framing the shot. Very cinema/photo specific."
        />
      </div>

      <section className="mt-12 rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Pure Symbol Comparison (No Text)</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          If you want a "Symbol Only" logo (like Apple), this is how they would look.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-border bg-background">
             <svg viewBox="0 0 50 50" className="h-12 w-auto">
               <path d="M10,15 L40,15 L36,35 L14,35 Z" fill="none" stroke="#00d992" strokeWidth="3" />
               <path d="M14,15 L14,35 M25,15 L25,35 M36,15 L36,35" stroke="#00d992" strokeWidth="1" opacity="0.5" />
             </svg>
          </div>
          <div className="flex h-24 items-center justify-center rounded-md border border la-border bg-background">
             <svg viewBox="0 0 50 50" className="h-12 w-auto">
               <path d="M25,10 L38,18 L38,32 L25,40 L12,32 L12,18 Z" fill="none" stroke="#00d992" strokeWidth="3" />
               <circle r="3" fill="#00d992" cx="25" cy="25" />
             </svg>
          </div>
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed border-border bg-background">
             <svg viewBox="0 0 50 50" className="h-12 w-auto">
               <path d="M10,10 L20,10 L20,20" stroke="#f2f2f2" strokeWidth="4" fill="none" />
               <path d="M40,10 L30,10 L30,20" stroke="#f2f2f2" strokeWidth="4" fill="none" />
               <path d="M10,40 L20,40 L20,30" stroke="#f2f2f2" strokeWidth="4" fill="none" />
               <path d="M40,40 L30,40 L30,30" stroke="#00d992" strokeWidth="4" fill="none" />
             </svg>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between text-sm">
        <Link href="/logo-preview" className="text-muted-foreground hover:text-foreground">
          ← Back to Basic Styles
        </Link>
        <span className="text-muted-foreground">
          Pick a shape and a style (Symbol + Text OR Pure Symbol).
        </span>
      </div>
    </div>
  );
}
