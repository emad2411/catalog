type LogoProps = {
  className?: string;
  showText?: boolean;
};

/**
 * disquote logo — "Ask once. Get the best price."
 *
 * Wordmark: "dis" + big Q circle + "uote"
 * Q circle is emerald-teal (#00D4A8) with a thick downward arrow tail
 * ("quote going down"). Circle is noticeably larger than text x-height.
 *
 * Geometry sourced from the specialized SVG model's design:
 *   - Circle: r=50, stroke-width=17 (wordmark), r=30, stroke-width=11 (icon)
 *   - Arrow: 45° diagonal exiting circle bottom-right with visible arrowhead
 *   - Text: Inter 700, 92px, dominant-baseline central
 *   - Colors: #00D4A8 circle/tail, #E8ECF1 text, on #0B0F14 canvas
 */
export function Logo({ className, showText = true }: LogoProps) {
  const size = className ?? "h-10 w-auto";

  if (!showText) {
    // Standalone Q icon (designed on 100×100 grid)
    return (
      <svg viewBox="0 0 100 100" className={size} aria-label="disquote">
        {/* Q circular ring */}
        <circle
          cx="46"
          cy="46"
          r="30"
          fill="none"
          stroke="#00D4A8"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {/* Price-drop arrow — 45° diagonal, thick + visible */}
        <path
          d="M 67 67 L 88 88 M 88 72 L 88 88 L 72 88"
          fill="none"
          stroke="#00D4A8"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Full wordmark: "dis" + [big Q circle] + "uote"
  return (
    <svg viewBox="260 145 500 165" className={size} aria-label="disquote">
      {/* Left segment: "dis" (right-aligned, ends at x=395) */}
      <text
        x="395"
        y="220"
        textAnchor="end"
        dominantBaseline="central"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="92"
        letterSpacing="-0.9"
        fill="#E8ECF1"
      >
        dis
      </text>

      {/* Central Q: circle + downward arrow tail */}
      <g transform="translate(421, 166)">
        {/* Circle — noticeably larger than text x-height */}
        <circle
          cx="54"
          cy="54"
          r="50"
          fill="none"
          stroke="#00D4A8"
          strokeWidth="17"
          strokeLinecap="round"
        />
        {/* Diagonal down-right arrow — "quote going down" */}
        <path
          d="M 89 89 L 124 124 M 124 98 L 124 124 L 98 124"
          fill="none"
          stroke="#00D4A8"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Right segment: "uote" (left-aligned, starts at x=560) */}
      <text
        x="560"
        y="220"
        textAnchor="start"
        dominantBaseline="central"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="92"
        letterSpacing="-0.9"
        fill="#E8ECF1"
      >
        uote
      </text>
    </svg>
  );
}