import { fib } from "./index.js";

describe("fib", () => {
  it("returns the fifth of the Fibonacci sequence", () => {
    expect(fib(5)).toBe(5);
  });

  it("returns the 75th of the Fibonacci sequence", () => {
    expect(fib(75)).toBe(2111485077978050);
  });
});
