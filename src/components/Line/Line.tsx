import React from 'react';
import { Data, Fill, Stroke } from '../../shared/types';
import { FrameContext } from '../Frame';
import { LinearGradient } from '../LinearGradient';
import { makeD, makePoints, project, sanitizeYData } from '../../shared/utils';
import { v1 as uuidv1 } from 'uuid';

// (2) path Fill
// - create the closed shape, the polygon
// - apply linearGradient to <path> as fill url
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop

// (3) path Stroke
// - width: 'strokeWidth'
// - style: dash = 'stroke-dasharray="3 1"'
// - color: apply linearGradient to <path> as stroke url
// - add the following from older code

// (4) ? animated from this to next data

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

const Line = ({ data, fill, stroke }: Props) => {
  return (
    <FrameContext.Consumer>
      { ({ height, viewBox, yRange }) => {
        const yData = sanitizeYData(data, yRange);
        let [ min, max ] = yRange ? yRange : [ Math.min(...yData), Math.max(...yData)];
        const yPixels = yData.map((y) => {
          return project(height, { n: y, min, max });
        });
        const points = makePoints(yPixels);
        const d = makeD(points, viewBox, yRange ? { min: yRange[0], max: yRange[1] } : undefined);
        const uuid = uuidv1();

        return (
          <>
            { stroke && stroke.color &&
              <defs>
                <LinearGradient id={uuid} color={stroke.color} />
              </defs>
            }

            {/* TODO: implement curve. see: https://github.com/borisyankov/react-sparklines/blob/master/src/SparklinesCurve.js */}
            <path
              d={d}
              stroke={`url(#${uuid})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={(stroke && stroke.width) || 0}
              strokeDasharray={(stroke && stroke.style && stroke.style === 'dash' && '6 4') || 'none'}
              fill="none"
              vectorEffect="non-scaling-stroke"
              shapeRendering="crispEdges"
            />
          </>
        )
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
