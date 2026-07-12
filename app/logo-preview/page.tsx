import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Logo — disquote",
};

export default function LogoPreviewPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      {/* ─── Hero ─── */}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">disquote logo</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Big Q circle in the middle of the wordmark. Emerald-teal circle +
          downward arrow tail = &quot;quote going down.&quot; All letters
          vertically aligned with the circle&apos;s center.
        </p>
      </header>

      {/* ─── Large display ─── */}
      <section className="mb-8 rounded-lg border border-border bg-card p-12">
        <div className="flex items-center justify-center">
          <Logo className="h-20 w-auto" />
        </div>
      </section>

      {/* ─── Q mark only ─── */}
      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-12">
          <p className="mb-4 font-mono text-xs text-muted-foreground">Q mark only</p>
          <div className="flex items-center justify-center">
            <Logo showText={false} className="h-20 w-auto" />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-12">
          <p className="mb-4 font-mono text-xs text-muted-foreground">Standard size</p>
          <div className="flex items-center justify-center">
            <Logo className="h-10 w-auto" />
          </div>
        </div>
      </section>

      {/* ─── Header context ─── */}
      <section className="mb-8 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">In a real header</h2>
        <div className="flex items-center justify-between rounded-md border border-border bg-background px-6 py-3">
          <div className="flex items-center gap-8">
            <Logo className="h-8 w-auto" />
            <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
              <span>Products</span>
              <span>About</span>
              <span>Contact</span>
            </nav>
          </div>
          <Button size="sm">Request Quote</Button>
        </div>
      </section>

      {/* ─── Small sizes ─── */}
      <section className="mb-8 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">At small sizes</h2>
        <div className="flex items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="font-mono text-xs text-muted-foreground">32px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo className="h-6 w-auto" />
            <span className="font-mono text-xs text-muted-foreground">24px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo className="h-4 w-auto" />
            <span className="font-mono text-xs text-muted-foreground">16px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo showText={false} className="h-8 w-auto" />
            <span className="font-mono text-xs text-muted-foreground">Q mark 32px</span>
          </div>
        </div>
      </section>

      {/* ─── On canvas vs elevated ─── */}
      <section className="mb-8 rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">On brand surfaces</h2>
        <div className="grid gap-4">
          <div className="flex items-center justify-center rounded-md border border-dashed border-border px-6 py-8"
               style={{ backgroundColor: "#0B0F14" }}>
            <Logo className="h-12 w-auto" />
          </div>
          <div className="flex items-center justify-center rounded-md border border-dashed border-border px-6 py-8"
               style={{ backgroundColor: "#131820" }}>
            <Logo className="h-12 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}