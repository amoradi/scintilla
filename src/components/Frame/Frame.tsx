import React from "react";
import { Range, ViewBox } from "../../shared/types";

type Props = {
  children?: JSX.Element[] | JSX.Element;
  height: number;
  viewBox: ViewBox;
  yRange: Range;
};

const defaults: Omit<Props, "children"> = {
  height: 50,
  viewBox: {
    width: 100,
    height: 100
  },
  yRange: null
};

const FrameContext = React.createContext({ ...defaults });

const Frame = ({ children, height, yRange }: Props) => {
  const viewBox = defaults.viewBox;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${viewBox.width} ${viewBox.width}`}
      preserveAspectRatio="none"
      style={{ display: "inline" }}
    >
      <FrameContext.Provider value={{ height, viewBox, yRange }}>
        {children}
      </FrameContext.Provider>
    </svg>
  );
};

Frame.defaultProps = { ...defaults };

export { Frame, FrameContext };
