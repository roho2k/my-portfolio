import * as React from "react";
import type { SVGProps } from "react";
const SvgWave4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={371}
    fill="none"
    viewBox="0 0 100 371"
    {...props}
  >
    <path
      fill="url(#wave-4_svg__a)"
      fillRule="evenodd"
      d="M-271 318h73.75c73.75 0 221.25 0 368.75-53S466.5 106 614 70.667c147.5-35.334 295 0 442.5 61.833s295 150.167 368.75 194.333L1499 371V0H-271z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="wave-4_svg__a"
        x1={-98.5}
        x2={1328}
        y1={186}
        y2={186}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFE7C" />
        <stop offset={1} stopColor="#005C99" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgWave4;
