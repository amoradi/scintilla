import React from 'react';
import { Data, Fill, Stroke } from '../../shared/types';
import { FrameContext } from '../Frame';
import { getYPixel, sanitizeYData } from '../../shared/utils';

// export type Data = number[];
// export type Fill = RGBA[];
// export type Stroke = {
//   width: number;
//   style: 'dash' | 'solid';
//   color: RGBA[];
// };

// (1) prep data
// filter for numbers
// yRange: filter out those items not within range bounds. if yRange is null, use all of data
// height: use to map data value to y pixel position
// ...and create points translated to frame: [idx, yMappedToChartHeight][]

// (2) path Fill
// - create the closed shape, the polygon
// - apply linearGradient to <path> as fill url
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop

// (3) path Stroke
// - width: 'strokeWidth'
// - style: dash = 'stroke-dasharray="3 1"'
// - color: apply linearGradient to <path> as stroke url
// - add the following from older code
// stroke={this.props.strokeColor}
// strokeLinejoin="round"
// strokeWidth={this.props.strokeWidth}
// fill="transparent"
// vectorEffect="non-scaling-stroke"

// (4) ? animated from this to next data

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

const Line = ({ data, fill, stroke }: Props) => {
  return (
    <FrameContext.Consumer>
      { ({ height, yRange }) => {
        const yData = sanitizeYData(data, yRange);

        let [ min, max ] = yRange ? yRange : [ Math.min(...yData), Math.max(...yData)];
        const yPixels = yData.map((y) => {
          return getYPixel(height, { y, min, max });
        });

        console.log(yPixels);
        return (
          <path

          ></path>
        )
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
