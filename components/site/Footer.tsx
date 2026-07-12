import Link from "next/link";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border/40 py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Logo className="h-7 w-auto" showText />
            <p className="text-sm text-muted-foreground">
              Ask once. Get the best price.
            </p>
          </div>

          {/* Column 2 — Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Products
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/products" className="text-sm hover:text-foreground transition-colors">
                Cameras
              </Link>
              <Link href="/products" className="text-sm hover:text-foreground transition-colors">
                Lenses
              </Link>
              <Link href="/products" className="text-sm hover:text-foreground transition-colors">
                Accessories
              </Link>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/about" className="text-sm hover:text-foreground transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Column 4 — Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Legal
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/terms" className="text-sm hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-12">
          <span className="text-sm font-semibold text-foreground">Contact us</span>
          <a 
            href="mailto:hello@disquote.com" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@disquote.com
          </a>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-border/40 mt-12 pt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 disquote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
