import { equal } from "./index.js";

describe("equals", () => {
  it("returns the fifth of the Fibonacci sequence", () => {
    expect(equal((0.3-0.2), 0.1)).toBe(true);
  });

  it("returns (0.2 - 0.1) vs. 0.1", () => {
    expect(equal((0.2 - 0.1), 0.1)).toBe(true);
  });
});