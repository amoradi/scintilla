import React from "react";
import { v1 as uuidv1 } from "uuid";
import { RGBA } from "../../shared/types";
import { Data, Fill, RGBA, Stroke } from "../../shared/types";
import { makeD, makePoints, project, sanitizeYData } from "../../shared/utils";
import { Circle } from "../Circle";
import { FrameContext } from "../Frame";

type Shapes = "circle" | "square" | "left arrow" | "right arrow";

type Props = {
  color: RGBA;
  data: Data;
  index?: number;
  shape: Shapes;
  size: number;
};

const defaults = {
  color: [255, 0, 0, 1] as RGBA,
  index: undefined,
  shape: "circle" as Shapes,
  size: 3
};

const Marker: React.FC<Props> = ({ color, data, index, shape, size }) => {
  return (
    <FrameContext.Consumer>
      {({ height, yRange }) => {
        const id = uuidv1();
        const index_ = index === undefined ? data.length - 1 : index;
        // pass height has range becuase we want pixel data relative to total height
        // not viewbox
        const yData = sanitizeYData(data, yRange);
        let [min, max] = yRange
          ? yRange
          : [Math.min(...yData), Math.max(...yData)];
        const yPixels = yData.map(y => {
          return project(height, { n: y, min, max });
        });
        const points = makePoints(yPixels);

        const Shape = (() => {
          let shape_;

          switch (shape) {
            case "circle": {
              shape_ = <Circle color={color} size={size} />;
              break;
            }
            // case 'square': {
            //   shape_ = <div />
            //   break;
            // }
            default: {
              shape_ = <Circle color={color} size={size} />;
            }
          }

          return shape_;
        })();
        const isLast = index_ === data.length - 1;
        const x =
          index_ === 0
            ? `0`
            : `calc(${(index_ / (data.length - 1)) * 100}% - ${size /
                (isLast ? 1 : 2)})`;
        const y = `${height - points[index_][1] - size / 2}`;

        return (
          <>
            <symbol id={id} viewBox={"0 0 5 5"} width="5" height="5">
              {Shape}
            </symbol>
            <use href={`#${id}`} x={x} y={y} />
          </>
        );
      }}
    </FrameContext.Consumer>
  );
};

Marker.defaultProps = { ...defaults };

export { Marker };
