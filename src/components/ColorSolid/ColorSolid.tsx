import React from "react";
import { ViewBox } from "../../shared/types";

const ColorSolid = ({
  subjectId,
  viewBox
}: {
  subjectId: string;
  viewBox: ViewBox;
}) => {
  return (
    <>
       {" "}
      <clipPath id={`color-solid-${subjectId}`}>
            <rect width={20} height={viewBox.height} fill="red" /> {" "}
      </clipPath>
    </>
  );
};

export { ColorSolid };
