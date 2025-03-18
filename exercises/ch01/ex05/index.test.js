import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns the sum of [1, 2, 3, 4]", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it("returns the sum of [-2, -1, 0, 1]", () => {
      expect(sum([-2, -1, 0, 1])).toBe(-2);
    });

    it("returns the sum of []", () => {
      expect(sum([])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns the factorial of 4", () => {
      expect(factorial(4)).toBe(24);
    });

    it("returns the factorial less than zero ", () => {
      expect(factorial(-4)).toBe(1);
    });
    it("returns the factorial of zero ", () => {
      expect(factorial(0)).toBe(1);
    });
  });
});
