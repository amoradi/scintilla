import React from "react";

type Props = {
  clipPath: string;
  d: string;
  fill: string;
  stroke: string;
  strokeDasharray: string;
  strokeWidth: number;
  vectorEffect: string;
};

const Path: React.FC<Props> = ({
  clipPath,
  d,
  fill,
  stroke,
  strokeDasharray,
  strokeWidth,
  vectorEffect
}) => {
  return (
    <path
      clipPath={clipPath}
      d={d}
      fill={fill}
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      strokeWidth={strokeWidth}
      vectorEffect={vectorEffect}
    />
  );
};

export { Path };
