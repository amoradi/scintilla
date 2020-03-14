import React from "react";
import { ColorMask } from "../ColorMask";
import { v1 as uuidv1 } from "uuid";
import { RGBA } from "../../shared/types";
import { Path } from "../Path";

function MultiSolidColor({
  color,
  d,
  maskHeight,
  viewBoxWidth,
  strokeStyle,
  width,
  mode
}: {
  color: RGBA[];
  d: string;
  maskHeight: number;
  viewBoxWidth: number;
  strokeStyle: "dash" | "solid";
  width: number;
  mode: "stroke" | "fill";
}) {
  const uuids = color.map(() => uuidv1());
  const xStep =
    mode === "stroke"
      ? viewBoxWidth / color.length
      : viewBoxWidth / color.length;
  return (
    <>
      {color.map((c, i) => {
        return (
          <React.Fragment key={i}>
            <defs>
              <ColorMask
                x={i * xStep}
                id={uuids[i]}
                height={maskHeight}
                width={xStep}
              />
            </defs>

            <Path
              clipPath={`url(#${uuids[i]})`}
              d={d}
              stroke={mode === "stroke" ? `rgba(${c.join(", ")})` : "none"}
              strokeWidth={width}
              strokeDasharray={
                (strokeStyle === "dash" &&
                  `${(width || 1) * 6} ${(width || 1) * 4}`) ||
                "none"
              }
              fill={mode === "fill" ? `rgba(${c.join(", ")})` : "none"}
              vectorEffect="non-scaling-stroke"
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export { MultiSolidColor };
