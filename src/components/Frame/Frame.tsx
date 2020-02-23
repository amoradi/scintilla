import React from 'react';
import { Range } from '../../shared/types';

type Props = { children?: JSX.Element[] | JSX.Element; height: number, yRange: Range};

const defaults: Omit<Props, 'children'> = {
  height: 50,
  yRange: null
};

const FrameContext = React.createContext({...defaults});

const Frame = ({ children, height, yRange }: Props) => {
  return ( 
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 10 10`}
      preserveAspectRatio="none"
    >
      <FrameContext.Provider value={{ height, yRange }}>
        {children}
      </FrameContext.Provider>
    </svg>
  );
};

Frame.defaultProps = { ...defaults };

export { Frame, FrameContext };
