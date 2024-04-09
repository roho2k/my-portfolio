import * as React from "react";
import type { SVGProps } from "react";
const SvgWave1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={311}
    fill="none"
    viewBox="0 0 100 311"
    {...props}
  >
    <path
      fill="url(#wave-1_svg__a)"
      fillRule="evenodd"
      d="m-198 97.408 44.66 48.703c46.013 48.704 135.333 146.112 226.007 162.346 90.673 16.235 179.993-48.703 270.666-97.407 90.674-48.704 179.994-81.173 270.667-97.408s179.993-16.234 270.667 8.118c90.673 24.351 179.993 73.055 270.663 64.938 90.68-8.117 180-73.056 226.01-105.525l44.66-32.47V0H-198z"
      clipRule="evenodd"
      style={{
        mixBlendMode: "difference",
      }}
    />
    <defs>
      <linearGradient
        id="wave-1_svg__a"
        x1={-198}
        x2={1426}
        y1={155.5}
        y2={155.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5C00" />
        <stop offset={1} stopColor="#005C99" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgWave1;
