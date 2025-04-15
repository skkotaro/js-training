import { equals } from "./index.js";

describe("equals", () => {
  it("returns comparisons between objects with the same value", () => {
    expect(equals(42, 42)).toBe(true);
    expect(equals(null, null)).toBe(true);
  });

  it("returns comparisons between objects of different types", () => {
    expect(equals({x: 42}, 42)).toBe(false);
    expect(equals(null, {x: 42})).toBe(false);
  });

  it("returns false when comparisons objects with different property structures", () => {
    expect(equals({x: 1}, {y: 1})).toBe(false);
    expect(equals({x: 1}, {x: 1, y: 1})).toBe(false);
  });

  it("returns a comparison of object and an object with additions to the elements", () => {
    expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})).toBe(true);
    expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})).toBe(false);
  });
});