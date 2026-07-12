import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/*  Social media icons — simple brand SVGs                            */
/* ------------------------------------------------------------------ */

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socials = [
  { label: "X", href: "https://x.com/disquote", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com/disquote", Icon: InstagramIcon },
];

/* ------------------------------------------------------------------ */
/*  Link data                                                         */
/* ------------------------------------------------------------------ */

const linkGroups = [
  {
    title: "Products",
    links: [
      { label: "Cameras", href: "/products" },
      { label: "Lenses", href: "/products" },
      { label: "Accessories", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* ── Desktop: horizontal columns ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16 xl:gap-24">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Logo className="h-7 w-auto" showText />
            <p className="text-sm text-muted-foreground">
              Ask once. Get the best price.
            </p>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Mobile: accordion link groups ── */}
        <div className="lg:hidden">
          <Accordion multiple defaultValue={[]}>
            {linkGroups.map((group) => (
              <AccordionItem key={group.title} value={group.title}>
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary transition-colors [&>svg]:!text-muted-foreground [&>svg]:hover:!text-primary">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 pt-1">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* ── Social icons + contact ── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-10 lg:mt-12">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <a
            href="mailto:hello@disquote.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors lg:ml-auto"
          >
            hello@disquote.com
          </a>
        </div>

        {/* ── Copyright ── */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} disquote
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
