export type RGBA = [number, number, number, number];
export type Range = [number, number] | null;
export type Data = number[];
export type Fill = RGBA | RGBA[];
export type Color = {
  gradient?: RGBA | RGBA[];
  solid?: RGBA | RGBA[];
};
export type Stroke = {
  width: number;
  style: "dash" | "solid";
  color: Color;
};
export type ViewBox = {
  width: number;
  height: number;
};
export type Point = [number, number];
export type Extrema = {
  x: { min: number; max: number };
  y: { min: number; max: number };
};
