type LogoProps = {
  className?: string;
  showText?: boolean;
};

/**
 * disquote logo — "Ask once. Get the best price."
 *
 * The wordmark "disquote" is split: "dis" on the left, "uote" on the right.
 * The Q in the middle is a large emerald-teal circle with a downward arrow
 * tail — symbolising "quote going down." All letters are vertically aligned
 * with the circle's center.
 *
 * Brand colours from DESIGN.md:
 *   circle + tail:  #00D4A8 (emerald-teal — primary)
 *   text:            currentColor (defaults to #E8ECF1 ink on dark canvas)
 *   font:            Inter 700, lowercase, tight tracking
 *
 * Geometry (viewBox 0 0 172 56):
 *   "dis" — x=2, width ~48px, ends at x≈50
 *   gap 8px → circle left edge at 58
 *   circle — cx=74, cy=32, r=16 (diameter 32; bigger than text cap height ~25
 *     but vertically centered on the text midline so it reads as a "big Q"
 *     encompassing the word, not floating below it)
 *   gap 8px → "uote" starts at x=98
 *   Q tail — crosses through circle bottom-right, exits with arrowhead
 */
export function Logo({ className, showText = true }: LogoProps) {
  const size = className ?? "h-10 w-auto";

  if (!showText) {
    return (
      <svg viewBox="0 0 48 48" className={size} aria-label="disquote">
        {/* Q circle */}
        <circle cx="24" cy="22" r="16" fill="none" stroke="#00D4A8" strokeWidth="2.5" />
        {/* Q tail — starts inside circle, exits bottom-right */}
        <path
          d="M30 28 L39 37"
          stroke="#00D4A8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Arrowhead pointing down-right */}
        <path
          d="M34 37 L39 37 L39 32"
          stroke="#00D4A8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 172 56" className={size} aria-label="disquote">
      {/* "dis" — left half of wordmark */}
      <text
        x="2"
        y="42"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="-0.9"
        fill="currentColor"
      >
        dis
      </text>

      {/* Big Q circle — centered in the middle of the word */}
      {/* cx=74: 8px gap after "dis" (which ends ~x58) */}
      {/* cy=32: vertically centered on text midline (lowercase center ~y32) */}
      {/* r=16: diameter 32 — "big Q" but proportionate to 36px text */}
      <circle
        cx="74"
        cy="32"
        r="16"
        fill="none"
        stroke="#00D4A8"
        strokeWidth="2.5"
      />

      {/* Q arrow tail — crosses through circle bottom-right, exits with arrowhead */}
      {/* "quote going down" (emerald-teal) */}
      <path
        d="M80 38 L89 47"
        stroke="#00D4A8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrowhead pointing down-right */}
      <path
        d="M84 47 L89 47 L89 42"
        stroke="#00D4A8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* "uote" — right half of wordmark */}
      {/* x=98: 8px gap after circle right edge (cx+r = 90) */}
      <text
        x="98"
        y="42"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="-0.9"
        fill="currentColor"
      >
        uote
      </text>
    </svg>
  );
}