import React from 'react';
import { Data, Fill, Stroke } from '../../types';

type Props = { data: Data; fill?: Fill; stroke?: Stroke };

const Bar = ({ data, fill, stroke }: Props) => {
  return <div>Bar</div>;
};

export { Bar };
