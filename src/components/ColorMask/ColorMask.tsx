import React from "react";

const ColorMask = ({
  id,
  height,
  width,
  x
}: {
  id: string;
  height: number;
  width: number;
  x: number;
}) => {
  return (
    <>
      <clipPath id={id}>
        <rect x={x} width={width} height={height} fill="red" />
      </clipPath>
    </>
  );
};

export { ColorMask };
