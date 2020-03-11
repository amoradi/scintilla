import React from "react";
import { RGBA } from "../../shared/types";
import { isNumber } from "../../shared/utils";

const GradientMask = ({
  id,
  gradient
}: {
  id: string;
  gradient: RGBA | RGBA[];
}) => {
  let gradientStops = null;

  // --- many colors ---
  if (
    Array.isArray(gradient) &&
    gradient.every(
      (c: any) => Array.isArray(c) && c.every((c_: any) => isNumber(c_))
    )
  ) {
    gradientStops = (
      <>
        {(gradient as RGBA[]).map((c: RGBA, i: number) => {
          const colorCount = (gradient || []).length;
          const step = 100 / colorCount;
          const start = step / 2;

          return (
            <stop
              key={i}
              offset={`${start + i * step}%`}
              stopColor={`rgba(${c.join(",")})`}
            />
          );
        })}
      </>
    );
  } else if (
    Array.isArray(gradient) &&
    gradient.every((c: any) => isNumber(c))
  ) {
    // --- 1 color ---
    gradientStops = (
      <stop offset="100%" stopColor={`rgba(${gradient.join(",")})`} />
    );
  }

  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse">
      {gradientStops}
    </linearGradient>
  );
};

export { GradientMask };
