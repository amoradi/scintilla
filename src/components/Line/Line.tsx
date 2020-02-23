import React from 'react';
import { Data, Fill, Stroke } from '../../types';
import { FrameContext } from '../Frame';


// export type Data = number[];
// export type Fill = RGBA[];
// export type Stroke = {
//   width: number;
//   style: 'dash' | 'solid';
//   color: RGBA[];
// };

// (1) prep data
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
        return (
          <path
            // // I'm sure there's a better way >_<, but for time
            // // https://github.com/microsoft/TypeScript/issues/16019
            // ref={
            //   ((pathRef: SVGPathElement): PathRef => {
            //     if (pathRef) return (this.pathRef = (pathRef as unknown) as PathRef);
            //   }) as LegacyRef<SVGPathElement>
            // }
            // d={d}
            // stroke={strokeColor}
            // strokeLinejoin="round"
            // strokeWidth={this.props.strokeWidth}
            // fill="transparent"
            // vectorEffect="non-scaling-stroke"
          ></path>
        )
      }}
    </FrameContext.Consumer>
  );
};

export { Line };
