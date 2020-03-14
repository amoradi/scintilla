import React from "react";
import { Data, Fill, RGBA, Stroke } from "../../shared/types";
import { FrameContext } from "../Frame";
import { makeD, makePoints, project, sanitizeYData } from "../../shared/utils";
import { v1 as uuidv1 } from "uuid";
import { isRGBA } from "../../shared/utils";
import { Path } from "../Path";
import { FillGradient } from "./FillGradient";
import { StrokeGradient } from "./StrokeGradient";
import { MultiSolidColor } from "./MultiSolidColor";

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

const Line = ({ data, fill, stroke }: Props) => {
  return (
    <FrameContext.Consumer>
      {({ height, viewBox, yRange }) => {
        const yData = sanitizeYData(data, yRange);
        let [min, max] = yRange
          ? yRange
          : [Math.min(...yData), Math.max(...yData)];
        const yPixels = yData.map(y => {
          return project(height, { n: y, min, max });
        });
        const points = makePoints(yPixels);
        const d = makeD(
          points,
          viewBox,
          yRange
            ? {
                min: project(height, { n: min, min, max }),
                max: project(height, { n: max, min, max })
              }
            : undefined
        );
        const polygonalD = makeD(
          points,
          viewBox,
          yRange
            ? {
                min: project(height, { n: min, min, max }),
                max: project(height, { n: max, min, max })
              }
            : undefined,
          true
        );
        const uuid = uuidv1();
        let uuidFillGradient;

        return (
          <>
            {/* ========== Fill ========== */}

            {/* --- Gradient --- */}
            {fill && fill.gradient && (uuidFillGradient = uuidv1()) && (
              <FillGradient
                gradient={fill.gradient}
                polygonalD={polygonalD}
                uuid={uuidFillGradient}
              />
            )}

            {/* --- Solid --- */}
            {/* 1 color */}
            {fill && fill.solid && isRGBA(fill.solid) && (
              <Path
                clipPath={"none"}
                d={polygonalD}
                fill={`rgba(${fill.solid.join(", ")})`}
                stroke="none"
                strokeWidth={0}
                strokeDasharray="none"
                vectorEffect="non-scaling-stroke"
              />
            )}

            {/* multi color */}
            {fill &&
              fill.solid &&
              Array.isArray(fill.solid) &&
              fill.solid.every((c: any) => isRGBA(c)) && (
                <MultiSolidColor
                  color={fill.solid as RGBA[]}
                  d={polygonalD}
                  maskHeight={viewBox.height}
                  viewBoxWidth={viewBox.width}
                  strokeStyle="solid"
                  width={0}
                  mode="fill"
                />
              )}

            {/* ========== Stroke ========== */}

            {/* --- Gradient --- */}
            {stroke && stroke.color && stroke.color.gradient && (
              <StrokeGradient
                d={d}
                gradient={stroke.color.gradient}
                strokeDasharray={
                  (stroke &&
                    stroke.style &&
                    stroke.style === "dash" &&
                    `${((stroke && stroke.width) || 1) * 6} ${((stroke &&
                      stroke.width) ||
                      1) * 4}`) ||
                  "none"
                }
                strokeWidth={(stroke && stroke.width) || 0}
                uuid={uuid}
              />
            )}

            {/* --- Solid --- */}

            {/* 1 color */}
            {stroke && stroke.color && isRGBA(stroke.color.solid) && (
              <Path
                clipPath={"none"}
                d={d}
                stroke={`rgba(${stroke &&
                  stroke.color &&
                  stroke.color.solid &&
                  stroke.color.solid.join(", ")})`}
                strokeWidth={(stroke && stroke.width) || 0}
                strokeDasharray={
                  (stroke &&
                    stroke.style &&
                    stroke.style === "dash" &&
                    `${((stroke && stroke.width) || 1) * 6} ${((stroke &&
                      stroke.width) ||
                      1) * 4}`) ||
                  "none"
                }
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            )}

            {/* multi color */}
            {stroke &&
              stroke.color &&
              Array.isArray(stroke.color.solid) &&
              stroke.color.solid.every((c: any) => isRGBA(c)) && (
                <MultiSolidColor
                  color={stroke.color.solid as RGBA[]}
                  d={d}
                  maskHeight={viewBox.height}
                  viewBoxWidth={viewBox.width}
                  strokeStyle={stroke.style}
                  width={stroke.width}
                  mode={"stroke"}
                />
              )}
          </>
        );
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
