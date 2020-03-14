import React from "react";
import { Path } from "../Path";
import { GradientMask } from "../GradientMask";
import { RGBA } from "../../shared/types";

type Props = {
  gradient: RGBA | RGBA[];
  polygonalD: string;
  uuid: string;
};

const FillGradient: React.FC<Props> = ({ gradient, polygonalD, uuid }) => {
  return (
    <>
      <defs>
        <GradientMask id={uuid} gradient={gradient} />
      </defs>

      <Path
        clipPath={"none"}
        d={polygonalD}
        fill={`url(#${uuid})`}
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
};

export { FillGradient };
