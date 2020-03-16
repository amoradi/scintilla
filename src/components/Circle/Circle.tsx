import React from "react";
import { RGBA } from "../../shared/types";

type Props = {
  color: RGBA;
  size: number;
};

const Circle: React.FC<Props> = ({ color, size }) => (
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2}
    fill={`rgba(${color.join(", ")})`}
  />
);

export { Circle };
