---
version: alpha
name: disquote
description: A quote-driven marketplace where buyers request quotes and sellers compete on price. The surface is a deep navy-black canvas with a single emerald-teal trust accent for CTAs and status, a warm amber secondary for deal/savings indicators, and a red danger used only for price-drop signals. Typography pairs Inter (display + body) with JetBrains Mono (data, prices, technical labels). The brand mark is a Q with a downward arrow tail — "quote going down."

colors:
  primary: "#00D4A8"
  primary-soft: "#33DDB5"
  primary-deep: "#00B894"
  on-primary: "#0B0F14"
  secondary: "#FFB347"
  secondary-soft: "#FFC56E"
  on-secondary: "#0B0F14"
  danger: "#FF5252"
  danger-soft: "#FF7B7B"
  ink: "#E8ECF1"
  ink-strong: "#FFFFFF"
  body: "#A0AAB8"
  mute: "#6B7689"
  hairline: "#1E2530"
  hairline-soft: "#2A3340"
  canvas: "#0B0F14"
  canvas-soft: "#131820"
  canvas-text-soft: "#F0F2F5"
  surface-elevated: "#1A2028"

typography:
  display-xl:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 60px
    fontWeight: 400
    lineHeight: 60px
    letterSpacing: -0.65px
  display-lg:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.9px
  display-md:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.6px
  display-sm:
    fontFamily: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  eyebrow-mono:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 2.52px
  eyebrow-uppercase:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0.45px
  body-lg:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
  body-md-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 23px
  caption:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-strong:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  code:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  code-strong:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 13px
    fontWeight: 500
    lineHeight: 16px
  button-md:
    fontFamily: Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  price-lg:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
  price-md:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  price-sm:
    fontFamily: "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.3xl}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-outline-on-dark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-ghost-teal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  button-pill-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  button-pill-tag-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  card-feature-emphasized:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  code-mockup:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  code-inline-chip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.canvas-text-soft}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.3xl}"
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.3xl}"
  teal-divider-band:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.primary}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.3xl}"

  # ─── disquote marketplace components ───
  quote-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg} {spacing.xl}"
    typography: "{typography.body-sm}"
  quote-card-best:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    borderWidth: 1px
    rounded: "{rounded.md}"
    padding: "{spacing.lg} {spacing.xl}"
    typography: "{typography.body-sm}"
  best-price-badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  price-drop-indicator:
    backgroundColor: "{colors.danger}"
    textColor: "#FFFFFF"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  seller-name:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  seller-price:
    typography: "{typography.price-md}"
    textColor: "{colors.ink}"
  seller-price-best:
    typography: "{typography.price-md}"
    textColor: "{colors.primary}"
  quote-request-form:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  category-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  category-tag-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  quote-comparison-list:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    itemDivider: "{colors.hairline}"
  quote-comparison-row:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"

  # ─── Examples (illustrative) — auto-derived ───
  ex-pricing-tier:
    description: "Default pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — emerald border + primary-coloured price."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-product-selector:
    description: "Quote request summary — category tags + search input inside a feature card."
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-cart-drawer:
    description: "Quote comparison panel — competing seller offers displayed as stacked rows."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  ex-data-table-cell:
    description: "Quote comparison table. Header uses mono-caps eyebrow typography; body uses body-sm + price-md."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.body-sm}"
    priceTypography: "{typography.price-md}"
    cellPadding: "{spacing.md} {spacing.lg}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
  ex-empty-state-card:
    description: "No quotes received yet — empty-state illustration frame."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification — new quote received, price-drop alert."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
---

## Overview

disquote is a quote-driven marketplace where buyers request a quote and sellers compete on price. The brand wears its marketplace identity proudly: a deep navy-black `{colors.canvas}` (`#0B0F14`) page background that runs edge-to-edge with no light-mode counterpart, an emerald-teal accent (`{colors.primary}` `#00D4A8`) reserved for CTAs, primary selection, and "best price" highlights, a warm amber secondary (`{colors.secondary}` `#FFB347`) for deal/savings indicators and "Best price" badges, and a red danger (`{colors.danger}` `#FF5252`) used exclusively for price-drop signals. Typography pairs Inter for display and body with JetBrains Mono for prices, data, and technical labels — because prices are data, not narrative.

The decorative system is restrained. No gradient mesh, no atmospheric backdrop, no illustration suite. Instead, the brand uses small typographic moments — a teal "Request Quote" button, amono price comparison card where Seller C's row glows with an emerald border, an amber "Best price" pill, a red "↓ $160" price-drop badge — to mark its identity. Every surface is a card with a cool hairline border. Every price is rendered in JetBrains Mono so numbers align visually. The result is a page that feels transactional: ask once, see competing quotes, pick the best price.

The brand mark is a Q — the tail extends diagonally downward into an arrow head, symbolising "quote going down." The wordmark "disquote" is in lowercase Inter with the q's tail matching the logo mark in emerald. The tagline: "Ask once. Get the best price."

**Key Characteristics:**
- Emerald-teal `{colors.primary}` (`#00D4A8`) carries every primary CTA, every selected tag, every "best price" highlight. The trust colour.
- Amber `{colors.secondary}` (`#FFB347`) is the deal colour — "Best price" badges, savings indicators, warm accent.
- Red `{colors.danger}` (`#FF5252`) appears only as a price-drop badge — "↓ $160" — never as a general UI colour.
- Deep navy-black `{colors.canvas}` (`#0B0F14`) is the only page surface. No light-mode rhythm.
- Hairline-bordered cards (`{colors.hairline}` `#1E2530`, 1 px solid) are the primary chrome — no shadows, just precise hairline rectangles on dark navy.
- Inter (display + body) + JetBrains Mono (prices, data, labels) pair carries every typographic role.
- Buttons are tight 6 px rounded rectangles (not pills); inline category tags and status badges use the 9999 px full pill.
- All prices are rendered in JetBrains Mono — prices are data, not narrative.

## Colors

### Brand & Accent
- **Emerald-Teal** (`{colors.primary}` — `#00D4A8`): The primary brand accent. Every primary CTA, every selected category tag, every "best price" row border, the Q logo's arrow tail. The trust colour. Reserved.
- **Primary Soft** (`{colors.primary-soft}` — `#33DDB5`): A slightly lighter teal used inside ghost button variants and focus / hover indicators.
- **Primary Deep** (`{colors.primary-deep}` — `#00B894`): A darker teal for inline link colour in body copy.

### Secondary (Deal / Savings)
- **Amber** (`{colors.secondary}` — `#FFB347`): The deal colour. "Best price" badges, savings indicators, warm highlights. Used sparingly — one amber element per surface maximum.
- **Secondary Soft** (`{colors.secondary-soft}` — `#FFC56E`): A lighter amber for hover / focus on secondary elements.

### Danger (Price-Drop Only)
- **Red** (`{colors.danger}` — `#FF5252`): Used exclusively for price-drop indicators — the "↓ $160" badge that shows how much the buyer saved. Never used for error states, validation, or general UI.
- **Danger Soft** (`{colors.danger-soft}` — `#FF7B7B`): Reserved for potential hover / focus states on danger badges.

### Surface
- **Canvas** (`{colors.canvas}` — `#0B0F14`): The default deep navy-black page background. The only surface mode in the brand's system.
- **Canvas Soft** (`{colors.canvas-soft}` — `#131820`): A slightly lighter dark fill used inside quote cards, form inputs, and comparison rows to mark them visually distinct against the canvas.
- **Surface Elevated** (`{colors.surface-elevated}` — `#1A2028`): A further elevated surface for modals and dropdowns — the highest dark tier before a border.
- **Hairline** (`{colors.hairline}` — `#1E2530`): 1 px solid borders — quote cards, buttons, dividers between rows. The brand's universal "edge" colour.
- **Hairline Soft** (`{colors.hairline-soft}` — `#2A3340`): A slightly lighter divider tint used inside comparison lists and stacked rows.

### Text
- **Ink** (`{colors.ink}` — `#E8ECF1`): Default text colour on the dark canvas — slightly off-white to reduce contrast strain.
- **Ink Strong** (`{colors.ink-strong}` — `#FFFFFF`): Pure-white text for hero headlines and high-emphasis copy.
- **Body** (`{colors.body}` — `#A0AAB8`): Secondary text — supporting copy, seller names, body paragraphs.
- **Mute** (`{colors.mute}` — `#6B7689`): Lowest-priority text — captions, fine print, footer lines.

## Typography

### Font Family
Two faces carry the system:
1. **Inter** for every display, body, button, and link role. Weights 400 / 500 / 600 / 700 are the working set. Used with OpenType features `"calt"` and `"rlig"` enabled across the page so the geometric Inter ligatures and contextual alternates render correctly.
2. **JetBrains Mono** (`"JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace`) for inline code, prices, data labels, category tags, and the eyebrow-mono uppercase labels. Weights 400 / 500 / 600. Prices are always mono — numbers must align visually in comparison tables.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 400 | 60px | -0.65px | Hero headline. |
| `{typography.display-lg}` | 36px | 400 | 40px | -0.9px | Section headlines. |
| `{typography.display-md}` | 24px | 700 | 32px | -0.6px | Sub-section / card-title displays. |
| `{typography.display-sm}` | 20px | 600 | 28px | 0 | Card titles in dense grids. |
| `{typography.eyebrow-mono}` | 14px | 600 | 20px | 2.52px | UPPERCASE eyebrow tags in JetBrains Mono. |
| `{typography.eyebrow-uppercase}` | 18px | 600 | 28px | 0.45px | Larger uppercase eyebrows above sections. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 26px | 0 | Default body paragraph. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | Bolded inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body — seller names, tag labels. |
| `{typography.body-sm-strong}` | 14px | 600 | 23px | 0 | Bold caption / pill labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print. |
| `{typography.caption-strong}` | 12px | 500 | 16px | 0 | Bold caption — badges, indicators. |
| `{typography.code}` | 13px | 400 | 18px | 0 | Code blocks, technical labels. |
| `{typography.code-strong}` | 13px | 500 | 16px | 0 | Emphasised inline code. |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | Button labels. |
| `{typography.price-lg}` | 24px | 600 | 32px | 0 | Hero price — quote result page. |
| `{typography.price-md}` | 16px | 500 | 24px | 0 | Price in comparison row. |
| `{typography.price-sm}` | 14px | 500 | 20px | 0 | Price in compact lists / mobile. |

### Principles
- **Inter regular at 60 px display** is the brand's calming counter. The light tracking and modest weight read like a platform you trust, not a marketplace shouting deals.
- **Two-face contrast carries the transactional voice.** Inter for narrative; JetBrains Mono for anything that is a number, a price, or a data label.
- **Prices are always JetBrains Mono.** In comparison tables, in quote cards, in badges — numbers align, decimals line up, the buyer scans fast.
- **Uppercase eyebrow in mono with tracking is the brand's signature label style.** `2.52 px` at 14 px in JetBrains Mono — this marks the technical, data-driven character of the marketplace.

## Layout

### Spacing System
- **Base unit**: 4 px.
- **Tokens**: `{spacing.xxs}` 2 px · `{spacing.xs}` 4 px · `{spacing.sm}` 8 px · `{spacing.md}` 12 px · `{spacing.lg}` 16 px · `{spacing.xl}` 20 px · `{spacing.2xl}` 24 px · `{spacing.3xl}` 32 px · `{spacing.4xl}` 40 px · `{spacing.5xl}` 48 px · `{spacing.6xl}` 64 px.
- **Section padding**: hero + content bands use `{spacing.5xl}` 48 px top/bottom.
- **Card interior padding**: feature cards sit at `{spacing.2xl}` 24 px; quote comparison rows sit at `{spacing.md} {spacing.lg}` 12 px / 16 px.

### Grid & Container
- Marketing container centres at roughly 1200 – 1400 px; content stays edge-to-edge in colour with horizontal gutters of `{spacing.3xl}` on desktop.
- Feature-card grids: 2-up to 3-up at desktop, 1-up at mobile.
- Quote comparison list: single column, full width inside container.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero 60→32 px; cards 1-up; nav hamburger; quotes stack vertically. |
| Tablet | 768–1023px | Cards 2-up; nav stays horizontal. |
| Desktop | ≥ 1024px | Full 3-up card grids; quote comparison rows full-width. |

#### Touch Targets
Buttons render at ~44 px tall (12 px vertical padding + 24 px line-height). Meet WCAG AAA at all breakpoints.

#### Collapsing Strategy
Nav collapses to hamburger at mobile; the menu overlay keeps the primary "Request Quote" CTA pinned at the bottom. Category tags wrap; quote comparison rows stack with price right-aligned.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed bands. |
| Level 1 — Hairline | 1 px solid `{colors.hairline}` border on `{colors.canvas-soft}`. | Default for every quote card, feature card, and button. |
| Level 2 — Best Price Glow | `0 0 12px rgba(0, 212, 168, 0.15)` subtle emerald outer glow + 1 px `{colors.primary}` border. | The winning quote row — best price highlight. |
| Level 3 — Modal Stack | `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(30, 37, 48, 0.5) inset` heavy drop + inset ring. | Modal / dialog surfaces in-product. |

### Decorative Depth
- Hairline cards on dark navy canvas — the brand's primary elevation mode.
- A 1 px solid `{colors.primary}` emerald border marks the "best price" / selected row in a quote comparison.
- A 1 px dashed `rgba(30, 37, 48, 0.6)` divider sits between section bands as a quiet rhythm cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands. |
| `{rounded.xs}` | 4px | Smallest inline pills, code chips. |
| `{rounded.sm}` | 6px | Default button and input radius. |
| `{rounded.md}` | 8px | Card chrome, quote cards, code blocks. |
| `{rounded.lg}` | 12px | Large quote-comparison panels, modals. |
| `{rounded.pill}` | 9999px | Category tags, status badges, best-price / price-drop pills. |
| `{rounded.full}` | 9999px | Circular icon containers, avatar. |

## Components

### Buttons

**`button-primary`** — the emerald-teal CTA.
- Background `{colors.primary}`, text `{colors.on-primary}` (navy-black), label `{typography.button-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

**`button-secondary`** — the amber deal button (used sparingly).
- Background `{colors.secondary}`, text `{colors.on-secondary}` (navy-black), same typography / padding / shape.

**`button-outline-on-dark`** — the hairline-on-dark secondary button.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography / padding / shape.

**`button-ghost-teal`** — text-only with teal label, for tertiary actions.
- Background `{colors.canvas}`, text `{colors.primary-soft}`, no border.

**`button-pill-tag`** — the inline pill for category tags.
- Background `{colors.canvas}`, text `{colors.ink}`, hairline border, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}` 9999 px.

**`button-pill-tag-selected`** — selected category tag.
- Background `{colors.primary}`, text `{colors.on-primary}`, no border, same typography / padding / shape.

### Cards & Containers

**`card-feature`** — the default feature card.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, padding `{spacing.2xl}`, shape `{rounded.md}` 8 px.

**`card-feature-emphasized`** — the same card with a 3 px hairline border for emphasis.
- Same chrome as `card-feature` with 3 px solid `{colors.hairline}`.

**`code-mockup`** — the dark code-editor card with copy-to-clipboard affordance.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.code}` (JetBrains Mono 13 px), padding `{spacing.xl}`, shape `{rounded.md}`.

**`code-inline-chip`** — the inline command snippet pill.
- Background `{colors.canvas-soft}`, text `{colors.canvas-text-soft}`, body in `{typography.code}`, padding `{spacing.xxs} {spacing.sm}`, shape `{rounded.sm}`.

### Marketplace Components

**`quote-card`** — a single seller's quote in the comparison list.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, padding `{spacing.lg} {spacing.xl}`, shape `{rounded.md}`. Contains: seller name (`{typography.body-sm-strong}`), price (`{typography.price-md}`), quote timestamp, action buttons.

**`quote-card-best`** — the winning / best-price quote.
- Same chrome as `quote-card` with 1 px solid `{colors.primary}` emerald border and a Level 2 "Best Price Glow." Price rendered in `{colors.primary}`.

**`best-price-badge`** — amber pill marking the cheapest quote.
- Background `{colors.secondary}`, text `{colors.on-secondary}`, label "Best price" in `{typography.caption-strong}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

**`price-drop-indicator`** — red pill showing savings amount.
- Background `{colors.danger}`, text white, label "↓ $X" in `{typography.caption-strong}`, shape `{rounded.pill}`, padding `{spacing.xxs} {spacing.sm}`.

**`quote-request-form`** — the buyer's "What are you looking for?" card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, padding `{spacing.2xl}`, shape `{rounded.md}`. Contains: search input, category tags, "Request Quote" primary button.

**`category-tag`** — unselected category filter pill.
- Background `{colors.canvas}`, text `{colors.body}`, 1 px `{colors.hairline}` border, body in `{typography.body-sm}`, shape `{rounded.pill}`, padding `{spacing.xs} {spacing.md}`.

**`category-tag-selected`** — selected category filter pill.
- Background `{colors.primary}`, text `{colors.on-primary}`, no border, same typography / padding / shape.

### Inputs & Forms

**`text-input`** — the standard text input on dark.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, 1 px solid `{colors.hairline}`, body in `{typography.body-sm}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}` 6 px.

### Navigation

**`nav-bar`** — the sticky top nav on dark.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md} {spacing.3xl}`. Contains the disquote wordmark + Q logo mark (emerald tail).

**`nav-link`** — link items in nav.
- Text `{colors.body}`, set in `{typography.body-sm}`.

**`footer`** — the dark footer band.
- Background `{colors.canvas}`, text `{colors.body}`, padding `{spacing.4xl} {spacing.3xl}`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the dark hero with the 60-px Inter headline.
- Background `{colors.canvas}`, text `{colors.ink}` (with the headline at `{colors.ink-strong}` white), padding `{spacing.5xl} {spacing.3xl}`. Headline in `{typography.display-xl}`. Eyebrow above headline in `{typography.eyebrow-mono}` (uppercase mono, tracked). The Q logo mark sits to the left of the wordmark in the nav.

**`content-band`** — the standard content band hosting feature grids.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.3xl}`. Section headline in `{typography.display-lg}`.

**`teal-divider-band`** — a thin teal-glow band that separates major sections.
- Background `{colors.canvas}`, 2 px solid `{colors.primary}` top/bottom border. The brand's only chromatic divider.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces. Each `ex-*` entry references brand-native primitives so downstream consumers re-skin consistently.

**`ex-pricing-tier`** — Default pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — emerald border + primary-coloured price.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-product-selector`** — Quote request summary — category tags + search input inside a feature card.
- Properties: `backgroundColor`, `borderColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Quote comparison panel — competing seller offers displayed as stacked rows.
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Quote comparison table. Header uses mono-caps eyebrow typography; body uses body-sm + price-md.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `priceTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — No quotes received yet — empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification — new quote received, price-drop alert.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` emerald-teal (`#00D4A8`) for every primary CTA, selected category tags, the Q logo's arrow tail, and the "best price" row border. Teal is the trust colour.
- Use `{colors.secondary}` amber (`#FFB347`) for "Best price" badges and savings highlights — one amber element per surface maximum. Amber is the deal colour.
- Use `{colors.danger}` red (`#FF5252`) exclusively for price-drop indicators ("↓ $160"). Never for errors, validation, or general UI.
- Use the dark `{colors.canvas}` navy-black (`#0B0F14`) as the only page surface. There is no light-mode rhythm.
- Build cards with 1 px `{colors.hairline}` borders, not shadows. Hairlines on dark navy IS the brand's elevation system.
- Render all prices in JetBrains Mono (`{typography.price-md}` / `{typography.price-sm}`). Prices are data — numbers align, decimals line up, the buyer scans fast.
- Pair Inter (sentence-case) with JetBrains Mono (prices, data, labels). Every uppercase moment uses JetBrains Mono at weight 600 with `2.52 px` tracking.
- Use `{rounded.sm}` 6 px for buttons, `{rounded.md}` 8 px for cards, `{rounded.pill}` 9999 px only for category tags and status badges.

### Don't
- Don't introduce a light-mode counterpart. The brand is dark-canvas only.
- Don't use emerald-teal as a body-text fill. It's CTA / selection / highlight-only.
- Don't use amber for primary actions. Amber is secondary — deals and savings, not CTAs.
- Don't use red outside of price-drop badges. Red means "you saved money," not "something went wrong."
- Don't drop a soft material shadow on cards. The brand uses hairlines + occasional emerald glow on the best-price row, never material elevation.
- Don't render the hero headline in heavy weight (700+). Display is intentionally calm at weight 400.
- Don't render prices in Inter. Prices are always JetBrains Mono — alignment matters.
- Don't replace Inter or JetBrains Mono with a different family — both faces are part of the brand's voice and pairing.