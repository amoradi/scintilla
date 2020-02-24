import React from 'react';
import { RGBA } from '../../shared/types';
import { isNumber } from '../../shared/utils';

const LinearGradient = ({ id, color }: { id: string, color: RGBA | RGBA[] }) => {
  let colorStops = null;

  // many colors
  if (Array.isArray(color) && color.every((c: any) => Array.isArray(c))) {
    colorStops = (
        <>
          {(color as RGBA[]).map((c: RGBA, i: number) => {
            const colorCount = color.length;
            const step = 100 / colorCount;
            const start = step / 2;

            return <stop offset={`${start + (i * step)}%`}  stopColor={`rgba(${c.join(',')})`} />
          })}
        </>
    );
  } else if (Array.isArray(color) && color.every((c: any) => isNumber(c))) {
    // 1 color
    colorStops = <stop offset="50%"  stopColor={`rgba(${color.join(',')})`} />
  }

  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse">
      {colorStops}
    </linearGradient>
  )
};

export { LinearGradient };
