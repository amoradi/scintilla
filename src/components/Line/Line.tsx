import React from "react";
import { Data, Fill, RGBA, Stroke } from "../../shared/types";
import { FrameContext } from "../Frame";
import { GradientMask } from "../GradientMask";
import { makeD, makePoints, project, sanitizeYData } from "../../shared/utils";
import { v1 as uuidv1 } from "uuid";
import { ColorMask } from "../ColorMask";
import { isRGBA } from "../../shared/utils";

// fill
// - create the closed shape, the polygon
// - apply GradientMask for gradient fills
// - apply clipPath for solid fills

// data curve for fill & stroke
// https://github.com/borisyankov/react-sparklines/blob/master/src/SparklinesCurve.js

// animate data

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

const MultiSolidColor = ({
  color,
  d,
  maskHeight,
  maskWidth,
  style,
  width
}: {
  color: RGBA[];
  d: string;
  maskHeight: number;
  maskWidth: number;
  style: "dash" | "solid";
  width: number;
}) => {
  const uuids = color.map(c => uuidv1());
  const xStep = maskWidth / (color.length - 1);
  return (
    <>
      {color.map((c, i) => {
        return (
          <>
            <defs>
              <ColorMask
                x={i * xStep}
                id={uuids[i]}
                height={maskHeight}
                width={xStep}
              />
            </defs>

            <path
              clipPath={`url(#${uuids[i]})`}
              d={d}
              stroke={`rgba(${c.join(", ")})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={width}
              strokeDasharray={(style === "dash" && "6 4") || "none"}
              fill="none"
              vectorEffect="non-scaling-stroke"
              shapeRendering="crispEdges"
            />
          </>
        );
      })}
    </>
  );
};

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
          yRange ? { min: yRange[0], max: yRange[1] } : undefined
        );
        const polygonalD = makeD(
          points,
          viewBox,
          yRange ? { min: yRange[0], max: yRange[1] } : undefined,
          true
        );
        const uuid = uuidv1();
        let uuidFillGradient;

        return (
          <>
            {/* ========== Fill ========== */}

            {/* --- Gradient --- */}
            {fill && fill.gradient && (uuidFillGradient = uuidv1()) && (
              <>
                <defs>
                  <GradientMask
                    id={uuidFillGradient}
                    gradient={fill.gradient}
                  />
                </defs>

                <path
                  d={polygonalD}
                  fill={`url(#${uuidFillGradient})`}
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  strokeDasharray="none"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="crispEdges"
                />
              </>
            )}

            {/* --- Solid --- */}

            {/* ========== Stroke ========== */}

            {/* --- Gradient --- */}
            {stroke && stroke.color && stroke.color.gradient && (
              <>
                <defs>
                  <GradientMask id={uuid} gradient={stroke.color.gradient} />
                </defs>

                <path
                  d={d}
                  stroke={`url(#${uuid})`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={(stroke && stroke.width) || 0}
                  strokeDasharray={
                    (stroke &&
                      stroke.style &&
                      stroke.style === "dash" &&
                      "6 4") ||
                    "none"
                  }
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  shapeRendering="crispEdges"
                />
              </>
            )}

            {/* --- Solid --- */}

            {/* 1 color */}
            {stroke && stroke.color && isRGBA(stroke.color.solid) && (
              <path
                d={d}
                stroke={`rgba(${stroke &&
                  stroke.color &&
                  stroke.color.solid &&
                  stroke.color.solid.join(", ")})`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={(stroke && stroke.width) || 0}
                strokeDasharray={
                  (stroke &&
                    stroke.style &&
                    stroke.style === "dash" &&
                    "6 4") ||
                  "none"
                }
                fill="none"
                vectorEffect="non-scaling-stroke"
                shapeRendering="crispEdges"
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
                  maskWidth={viewBox.width}
                  style={stroke.style}
                  width={stroke.width}
                />
              )}
          </>
        );
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
