import React from "react";
import { Color, RGBA } from "../../shared/types";
import { isNumber } from "../../shared/utils";

const LinearGradient = ({ id, color }: { id: string; color: Color }) => {
  let gradientStops = null;

  // ---- gradient
  // many colors
  if (
    color &&
    Array.isArray(color.gradient) &&
    color.gradient.every((c: any) => Array.isArray(c))
  ) {
    gradientStops = (
      <>
        {(color.gradient as RGBA[]).map((c: RGBA, i: number) => {
          const colorCount = (color.gradient || []).length;
          const step = 100 / colorCount;
          const start = step / 2;

          return (
            <stop
              offset={`${start + i * step}%`}
              stopColor={`rgba(${c.join(",")})`}
            />
          );
        })}
      </>
    );
  } else if (
    color &&
    Array.isArray(color.gradient) &&
    color.gradient.every((c: any) => isNumber(c))
  ) {
    // 1 color
    gradientStops = (
      <stop offset="100%" stopColor={`rgba(${color.gradient.join(",")})`} />
    );
  }

  // ---- solid
  // many colors
  let solidStops = null;

  if (
    color &&
    Array.isArray(color.solid) &&
    color.solid.every((c: any) => Array.isArray(c))
  ) {
    solidStops = (
      <>
        {(color.solid as RGBA[]).map((c: RGBA, i: number) => {
          const colorCount = (color.solid || []).length;
          const step = 100 / colorCount;

          return (
            <>
              <stop offset={`${step}%`} stopColor={`rgba(${c.join(",")})`} />
              <stop offset={`${step}%`} stopColor={`rgba(${c.join(",")})`} />
            </>
          );
        })}
      </>
    );
  } else if (
    color &&
    Array.isArray(color.solid) &&
    color.solid.every((c: any) => isNumber(c))
  ) {
    // 1 color
    solidStops = (
      <stop offset="100%" stopColor={`rgba(${color.solid.join(",")})`} />
    );
  }

  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse">
      {gradientStops}
      {solidStops}
    </linearGradient>
  );
};

export { LinearGradient };
