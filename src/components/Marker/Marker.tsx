import React from "react";
import { v1 as uuidv1 } from "uuid";
import { RGBA } from "../../shared/types";
import { Circle } from "../Circle";

type Shapes = "circle" | "square" | "left arrow" | "right arrow";

type Props = {
  color: RGBA;
  data: number;
  index: number;
  shape: Shapes;
  size: number;
};

const defaults = {
  color: [255, 0, 0, 1] as RGBA,
  index: 0,
  shape: "circle" as Shapes,
  size: 3
};

const Marker: React.FC<Props> = ({ color, data, index, shape, size }) => {
  const id = uuidv1();

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

  // given _data_ & _index_
  // compute x,y

  return (
    <>
      <symbol id={id} viewBox={"0 0 5 5"} width="5" height="5">
        {Shape}
      </symbol>
      <use href={`#${id}`} x="5" y="5" />
    </>
  );
};

Marker.defaultProps = { ...defaults };

export { Marker };
