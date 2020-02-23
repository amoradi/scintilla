import { Range } from './types';

export function isNumber(v: any): boolean  {
  return typeof v === 'number' && !isNaN(v) && isFinite(v)
};

export function sanitizeYData(yData: any[], yRange: Range): number[] {
  let isInRange = (n: number) => true;

  if (Array.isArray(yRange) && yRange.length === 2 && yRange.every(isNumber)) {
    const [min, max] = yRange;
    isInRange = (n: number) => (n >= min && n <= max);
  }

  return yData.filter(isNumber).filter(isInRange);
}

export function getYPixel(height: number, { y, min, max }: { y: number, min: number, max: number }): number {
  const yRel = (y - min) / (max - min);
  return height * yRel;
}