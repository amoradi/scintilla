import React from "react";
import { Path } from "../Path";
import { GradientMask } from "../GradientMask";
import { RGBA } from "../../shared/types";

type Props = {
  d: string;
  gradient: RGBA | RGBA[];
  strokeDasharray: string;
  strokeWidth: number;
  uuid: string;
};

const StrokeGradient: React.FC<Props> = ({
  d,
  gradient,
  strokeDasharray,
  strokeWidth,
  uuid
}) => {
  return (
    <>
      <defs>
        <GradientMask id={uuid} gradient={gradient} />
      </defs>

      <Path
        clipPath={"none"}
        d={d}
        stroke={`url(#${uuid})`}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
};

export { StrokeGradient };
