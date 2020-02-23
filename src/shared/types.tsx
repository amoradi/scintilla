export type RGBA = [number, number, number, number];
export type Range = [number, number] | null;
export type Data = number[];
export type Fill = RGBA[];
export type Stroke = {
  width: number;
  style: 'dash' | 'solid';
  color: RGBA[];
};
