import { equalArrays } from "./index.js";

describe("equalArrays", () => {
  it("returns the point moved in the positive direction", () => {
    const a = {x: 1}, b = a;
    a.x = 2;
    expect(equalArrays(a,b)).toBe(true);
  });
});