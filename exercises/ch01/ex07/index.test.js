import { Point } from "./index.js";

describe("fib", () => {
  it("returns the point moved in the positive direction", () => {
    const point = new Point(0, 0);
    point.add(2, 1);
    expect(point.x).toBe(2);
    expect(point.y).toBe(1);
  });

  it("returns the point moved in the negative direction", () => {
    const point = new Point(0, 0);
    point.add(-2, -1);
    expect(point.x).toBe(-2);
    expect(point.y).toBe(-1);
  });
});
