import * as React from "react";
import type { SVGProps } from "react";
const SvgWave3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={346}
    fill="none"
    viewBox="0 0 100 346"
    {...props}
  >
    <path
      fill="url(#wave-3_svg__a)"
      fillRule="evenodd"
      d="m-106 216.4 60-7.2c60-7.2 180-21.6 300 14.4S494 346 614 346s240-86.4 360-129.6 240-43.2 300-43.2h60V.4H-106z"
      clipRule="evenodd"
      style={{
        mixBlendMode: "color-dodge",
      }}
    />
    <defs>
      <linearGradient
        id="wave-3_svg__a"
        x1={-106}
        x2={1334}
        y1={173.2}
        y2={173.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ABBA01" />
        <stop offset={1} stopColor="#005C99" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgWave3;
