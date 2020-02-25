import React from "react";
import { Data, Fill, Stroke } from "../../shared/types";
import { FrameContext } from "../Frame";
import { GradientMask } from "../GradientMask";
import { makeD, makePoints, project, sanitizeYData } from "../../shared/utils";
import { v1 as uuidv1 } from "uuid";
import { ColorMask } from "../ColorMask";

// (2) path Fill
// - create the closed shape, the polygon
// - apply GradientMask to <path> as fill url
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop

// (3) path Stroke
// - do solid color masks
// - do data curve: https://github.com/borisyankov/react-sparklines/blob/master/src/SparklinesCurve.js

// (4) ? animated from this to next data

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
          yRange ? { min: yRange[0], max: yRange[1] } : undefined
        );
        const uuid = uuidv1();

        return (
          <>
            {/* --- Gradient Color --- */}
            {stroke && stroke.color && stroke.color.gradient && (
              <>
                <defs>
                  <GradientMask id={uuid} gradient={stroke.color.gradient} />
                </defs>

                <path
                  d={"M -10,-10 " + d}
                  id={uuid}
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

            {/* --- Solid Color --- */}
            {/* 
                         
                if color.solid is 1 color
                - create a path with a stoke color value
                - no ColorMasks

                if color.solid is multi color
                - create 3 clipPaths
                - and 3 paths

                { stroke && stroke.color && stroke.color.solid &&
                  <ColorSolid subjectId={uuid} viewBox={viewBox} />
                }
            */}

            {stroke && stroke.color && stroke.color.solid && null}
          </>
        );
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
