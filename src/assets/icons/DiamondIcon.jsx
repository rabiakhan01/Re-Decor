import * as React from "react";
const DiamondIcon = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <polyline
        fill="none"
        stroke="#000000"
        strokeWidth={2}
        strokeMiterlimit={10}
        points="29,6 46,6 63,27 32,58 1,27 18,6 32,6  32,58  "
      />
      <polyline
        fill="none"
        stroke="#000000"
        strokeWidth={2}
        strokeMiterlimit={10}
        points="32,57 18,27 24,6  "
      />
      <polyline
        fill="none"
        stroke="#000000"
        strokeWidth={2}
        strokeMiterlimit={10}
        points="32,57 46,27 40,6  "
      />
      <line
        fill="none"
        stroke="#000000"
        strokeWidth={2}
        strokeMiterlimit={10}
        x1={1}
        y1={27}
        x2={63}
        y2={27}
      />
    </g>
  </svg>
);
export default DiamondIcon;
