# Task 0.9 — Footer Implementation Steps

> Target file: `components/site/Footer.tsx`
> Wires into: `app/layout.tsx` (add below `{children}`)
> Status: Not started — junior dev model should follow this doc step-by-step.

---

## 1. Goal

Build a dark-themed footer that appears on every page. It must contain:
- Company info (logo + tagline)
- Three link columns: Products, Company, Legal
- Contact email
- Copyright line

---

## 2. Design Rules (read DESIGN.md first)

- Background: same as page (`bg-background`, which is navy-black `#0B0F14`)
- Top border: `border-t border-border/40`
- Text: `text-muted-foreground` for links, `text-foreground` for headings
- Link hover: `hover:text-foreground`
- Font: Inter (default sans), JetBrains Mono for prices/data only — NOT in footer
- Padding: `py-12` top, `pb-8` bottom, `px-4 sm:px-6 lg:px-8`
- Max-width container: `max-w-7xl mx-auto`
- No cards, no shadows, no background tints — the footer is a plain section

---

## 3. File Structure

```
components/site/Footer.tsx
```

This is a **Server Component** — no `"use client"` needed. It only renders static markup and links.

---

## 4. Layout Specification

Use a 4-column grid on desktop that collapses to 2 columns on tablet and 1 column on mobile.

```
Desktop (lg):
┌───────────────────────────────────────────────────────────┐
│  [Logo]              Products       Company        Legal          │
│  Ask once. Get       · Cameras      · About        · Terms        │
│  the best price.     · Lenses       · Contact      · Privacy      │
│                     · Accessories  · Careers                     │
└───────────────────────────────────────────────────────────┘

Contact: hello@disquote.com
────────────────────────────────────────────────────────────
© 2026 disquote. All rights reserved.
```

---

## 5. Column Details

### Column 1 — Brand
- Import and render `<Logo className="h-7 w-auto" showText />`
- Tagline below: `"Ask once. Get the best price."` — `text-sm text-muted-foreground`

### Column 2 — Products
Heading: `"Products"` — `text-sm font-semibold text-foreground uppercase tracking-wide`
Links:
- `/products` → "Cameras"
- `/products` → "Lenses"
- `/products` → "Accessories"

Use `next/link` for all links.

### Column 3 — Company
Heading: `"Company"`
Links:
- `/about` → "About"
- `/contact` → "Contact"
- `/about` → "Careers" (placeholder, links to /about)

### Column 4 — Legal
Heading: `"Legal"`
Links:
- `/terms` → "Terms of Service"
- `/privacy` → "Privacy Policy"

---

## 6. Contact Section

Below the 4-column grid, add a contact row:
- Label: `"Contact us"` — `text-sm font-semibold text-foreground`
- Email: `hello@disquote.com` — mailto link, `text-sm text-muted-foreground hover:text-foreground`

---

## 7. Copyright Row

At the very bottom:
- Left: `© 2026 disquote. All rights reserved.` — `text-xs text-muted-foreground`
- Right: same text or omit if no social links exist yet

Use `flex items-center justify-between` for the copyright row.
Top border: `border-t border-border/40` with `mt-12 pt-8` above it.

---

## 8. Responsive Breakpoints

| Breakpoint | Grid |
|---|---|
| `lg` (1024px+) | `grid-cols-4` — 4 columns |
| `md` (768px–1023px) | `grid-cols-2` — 2 columns |
| `< md` | `grid-cols-1` — stacked |

Brand column spans full width on mobile. On tablet, brand sits in col 1, Products + Company in col 2.

---

## 9. Wiring into Layout

Open `app/layout.tsx`. Add `<Footer />` directly after `{children}` inside `<body>`:

```tsx
<body className="min-h-full flex flex-col">
  <Header />
  {children}
  <Footer />   {/* ← add this */}
</body>
```

Import it: `import { Footer } from "@/components/site/Footer";`

---

## 10. Accessibility Requirements

- Footer wraps in `<footer>` semantic tag
- Column headings use `<h3>`
- All links have visible text — no icon-only links
- Color contrast: `text-muted-foreground` on `bg-background` passes WCAG AA

---

## 11. Acceptance Criteria (check before declaring done)

- [ ] `components/site/Footer.tsx` exists and exports `Footer`
- [ ] `app/layout.tsx` imports and renders `<Footer />` after `{children}`
- [ ] Logo renders correctly with `showText`
- [ ] All 3 link columns render with correct headings
- [ ] All links use `next/link` with valid hrefs
- [ ] Contact email is a `mailto:` link
- [ ] Copyright line shows `© 2026 disquote`
- [ ] Responsive: 1 col mobile, 2 col tablet, 4 col desktop
- [ ] No TypeScript errors (`npm run build` passes on Vercel)
- [ ] No `asChild`, no `any`, no inline styles

---

## 12. Common Pitfalls

- **DO NOT use `asChild` on any component** — this project uses base-nova (Base UI), not Radix. If you need a link styled like a button, use `next/link` with Tailwind classes directly.
- **DO NOT add `"use client"`** — the footer has no state or effects.
- **DO NOT add social icons** unless the user explicitly asks later.
- **DO NOT change the logo** — import the existing `Logo` component.

---

## 13. Reference Files

- `components/site/Logo.tsx` — existing logo component
- `app/layout.tsx` — where to wire the footer
- `DESIGN.md` — brand colors and typography tokens
- `app/plan/page.tsx` — mark step 0.9 as `done` when finished
