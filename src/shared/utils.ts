import { Point, Range, ViewBox } from "./types";

export function isNumber(v: any): boolean {
  return typeof v === "number" && !isNaN(v) && isFinite(v);
}

export function isRGBA(v: any): boolean {
  return (
    Array.isArray(v) && v.length === 4 && v.every((v_: any) => isNumber(v_))
  );
}

export function sanitizeYData(yData: any[], yRange: Range): number[] {
  let isInRange = (n: number) => true;

  if (Array.isArray(yRange) && yRange.length === 2 && yRange.every(isNumber)) {
    const [min, max] = yRange;
    isInRange = (n: number) => n >= min && n <= max;
  }

  return yData.filter(isNumber).filter(isInRange);
}

export function project(
  space: number,
  { n, min, max }: { n: number; min: number; max: number }
): number {
  const nRel = (n - min) / (max - min === 0 ? 1 : max - min);
  return space * nRel;
}

export function makePoints(yPixels: number[]): Point[] {
  return yPixels.map((y, i) => [i, y]);
}

export function extrema(points: Point[]) {
  const x = points.map(([x]) => x);
  const y = points.map(([x, y]) => y);

  return {
    x: { min: Math.min(...x), max: Math.max(...x) },
    y: { min: Math.min(...y), max: Math.max(...y) }
  };
}

// ASSUMPTION: viewBox origin is 0,0
export function makeD(
  points: Point[],
  viewBox: ViewBox,
  yRange?: { min: number; max: number },
  polygonal?: boolean
): string {
  const extrema_ = extrema(points);
  const projected: Point[] = points.map(([x, y]) => {
    return [
      project(viewBox.width, {
        n: x,
        min: extrema_.x.min,
        max: extrema_.x.max
      }),
      project(viewBox.height, {
        n: y,
        min: yRange ? yRange.min : extrema_.y.min,
        max: yRange ? yRange.max : extrema_.y.max
      })
    ];
  });

  let d = "";

  projected.forEach(([x, y], i) => {
    if (i === 0) {
      d += `M ${x},${viewBox.height - y}`;
    } else {
      d += ` L ${x},${viewBox.height - y}`;
    }
  });

  if (polygonal) {
    // take last point
    // from last point go to ===> L lp.x, 0
    d += ` L ${projected[projected.length - 1][0]},${viewBox.height}`;
    // then, go to origin ==> 0,0
    d += ` L ${0},${viewBox.height} Z`;
    // then, go to ===> fp.x, fp.y (Z)
  }

  return d;
}
