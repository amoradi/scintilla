import React from "react";
import { Data, Fill, RGBA, Stroke } from "../../shared/types";
import { FrameContext } from "../Frame";
import { GradientMask } from "../GradientMask";
import { makeD, makePoints, project, sanitizeYData } from "../../shared/utils";
import { v1 as uuidv1 } from "uuid";
import { ColorMask } from "../ColorMask";
import { isRGBA } from "../../shared/utils";

// todo:
// data curve for fill & stroke
// https://github.com/borisyankov/react-sparklines/blob/master/src/SparklinesCurve.js

// animate data

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

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

            <path
              clipPath={`url(#${uuids[i]})`}
              d={d}
              stroke={mode === "stroke" ? `rgba(${c.join(", ")})` : "none"}
              // strokeLinecap="round"
              // strokeLinejoin="round"
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
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  strokeWidth={0}
                  strokeDasharray="none"
                  vectorEffect="non-scaling-stroke"
                />
              </>
            )}

            {/* --- Solid --- */}
            {/* 1 color */}
            {fill && fill.solid && isRGBA(fill.solid) && (
              <path
                d={polygonalD}
                fill={`rgba(${fill.solid.join(", ")})`}
                stroke="none"
                // strokeLinecap="round"
                // strokeLinejoin="round"
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
              <>
                <defs>
                  <GradientMask id={uuid} gradient={stroke.color.gradient} />
                </defs>

                <path
                  d={d}
                  stroke={`url(#${uuid})`}
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
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
                  // shapeRendering="crispEdges"
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
                // strokeLinecap="round"
                // strokeLinejoin="round"
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
                // shapeRendering="crispEdges"
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
