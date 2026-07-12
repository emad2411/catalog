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
 */
export function Logo({ className, showText = true }: LogoProps) {
  const size = className ?? "h-10 w-auto";

  if (!showText) {
    return (
      <svg viewBox="0 0 60 60" className={size} aria-label="disquote">
        {/* Q circle */}
        <circle cx="30" cy="26" r="20" fill="none" stroke="#00D4A8" strokeWidth="2.5" />
        {/* Q arrow tail — diagonally downward */}
        <path d="M36 32 L47 43" stroke="#00D4A8" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arrowhead */}
        <path
          d="M42 43 L47 43 L47 38"
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
    <svg viewBox="0 0 180 56" className={size} aria-label="disquote">
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

      {/* Big Q circle — in the MIDDLE of the word */}
      <circle
        cx="70"
        cy="29"
        r="20"
        fill="none"
        stroke="#00D4A8"
        strokeWidth="2.5"
      />

      {/* Q arrow tail — "quote going down" (emerald-teal) */}
      <path
        d="M76 35 L86 45"
        stroke="#00D4A8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrowhead pointing down-right */}
      <path
        d="M81 45 L86 45 L86 40"
        stroke="#00D4A8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* "uote" — right half of wordmark */}
      <text
        x="96"
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