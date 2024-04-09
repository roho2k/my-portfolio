import * as React from "react";
import type { SVGProps } from "react";
const SvgWave2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={346}
    fill="none"
    viewBox="0 0 100 346"
    {...props}
  >
    <path
      fill="url(#wave-2_svg__a)"
      fillRule="evenodd"
      d="m-106 346 60-43.2C14 259.6 134 173.2 254 166s240 64.8 360 86.4 240-7.2 360-43.2 240-79.2 300-100.8l60-21.6V.4H-106z"
      clipRule="evenodd"
      style={{
        mixBlendMode: "difference",
      }}
    />
    <defs>
      <linearGradient
        id="wave-2_svg__a"
        x1={-106}
        x2={1334}
        y1={173.2}
        y2={173.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A2B000" />
        <stop offset={1} stopColor="#005C99" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgWave2;
