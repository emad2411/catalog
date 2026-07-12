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
      <svg viewBox="0 0 52 52" className={size} aria-label="disquote">
        {/* Q circle */}
        <circle cx="24" cy="22" r="16" fill="none" stroke="#00D4A8" strokeWidth="2.5" />
        {/* Q tail — thick visible arrow exiting bottom-right */}
        <path
          d="M29 27 L42 40"
          stroke="#00D4A8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Arrowhead — larger, clearly visible */}
        <path
          d="M35 40 L42 40 L42 33"
          stroke="#00D4A8"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 60" className={size} aria-label="disquote">
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
      <circle
        cx="74"
        cy="32"
        r="16"
        fill="none"
        stroke="#00D4A8"
        strokeWidth="2.5"
      />

      {/* Q arrow tail — "quote going down" (emerald-teal) */}
      {/* Thick, clearly visible arrow exiting the circle bottom-right */}
      <path
        d="M79 37 L93 51"
        stroke="#00D4A8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Arrowhead — large, unmistakable */}
      <path
        d="M85 51 L93 51 L93 43"
        stroke="#00D4A8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* "uote" — right half of wordmark */}
      <text
        x="100"
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