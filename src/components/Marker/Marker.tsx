import React from "react";
import { v1 as uuidv1 } from "uuid";
import { Data, RGBA } from "../../shared/types";
import { makePoints, project, sanitizeYData } from "../../shared/utils";
import { Circle } from "../Circle";
import { FrameContext } from "../Frame";

type Shapes = "circle"; // TODO: add these later: | "square" | "left arrow" | "right arrow";

type Props = {
  color?: RGBA;
  data: Data;
  index?: number;
  shape?: Shapes;
  size?: number;
};

const defaults = {
  color: [255, 0, 0, 1] as RGBA,
  index: undefined,
  shape: "circle" as Shapes,
  size: 4
};

const Marker: React.FC<Props> = ({ color, data, index, shape, size }) => {
  return (
    <FrameContext.Consumer>
      {({ height, yRange }) => {
        // limit marker size for now
        // TODO: possibly revist this at a later date
        size = Math.min(size as number, 10);
        const id = uuidv1();
        // pass height has range becuase we want pixel data relative to total height
        // not viewbox
        const yData = sanitizeYData(data, yRange);
        let [min, max] = yRange
          ? yRange
          : [Math.min(...yData), Math.max(...yData)];
        // compute indices AFTER sanitizing
        const lastIndex = yData.length - 1;
        const index_ =
          index === undefined
            ? lastIndex
            : Math.min(index as number, lastIndex);
        const yPixels = yData.map(y => {
          return project(height, { n: y, min, max });
        });
        const points = makePoints(yPixels);

        const Shape = (() => {
          let shape_;

          switch (shape) {
            case "circle": {
              shape_ = <Circle color={color as RGBA} size={size} />;
              break;
            }
            // case 'square': {
            //   shape_ = <div />
            //   break;
            // }
            default: {
              shape_ = <Circle color={color as RGBA} size={size} />;
            }
          }

          return shape_;
        })();
        const isLast = index_ === lastIndex;
        const x =
          index_ === 0
            ? `0`
            : `calc(${(index_ / lastIndex) * 100}% - ${size /
                (isLast ? 1 : 2)})`;
        const y = `${height - points[index_][1] - size / 2}`;

        return (
          <>
            <symbol id={id} viewBox={"0 0 10 10"} width="10" height="10">
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
