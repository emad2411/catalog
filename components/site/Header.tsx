"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

const itemVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-16 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" showText />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Button size="sm" onClick={() => router.push("/quote")}>
              Request Quote
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-background"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Top bar: Logo + Close */}
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <Link href="/" onClick={() => setOpen(false)}>
                <Logo className="h-8 w-auto" showText />
              </Link>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-7" />
              </button>
            </div>

            {/* Centered links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => handleNavigate(link.href)}
                  className="text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-4xl"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                custom={navLinks.length}
                variants={itemVariants}
                initial="closed"
                animate="open"
                onClick={() => handleNavigate("/auth/login")}
                className="text-xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign in
              </motion.button>
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-10">
              <motion.div
                custom={navLinks.length + 1}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <Button
                  className="w-full py-6 text-lg"
                  onClick={() => handleNavigate("/quote")}
                >
                  Request Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
