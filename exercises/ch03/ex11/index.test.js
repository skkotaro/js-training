import { equals } from "./index.js";

describe("equals", () => {
  it("Returns comparisons between objects with the same value", () => {
    expect(equals(42, 42)).toBe(true);
    expect(equals(null, null)).toBe(true);
  });

  it("Returns comparisons between objects of different values", () => {
    expect(equals({x: 42}, 42)).toBe(false);
    expect(equals(null, {x: 42})).toBe(false);
  });

  it("Returns a comparison of obj1 and obj1 objects whose elements are not aligned", () => {
    expect(equals({x: 1}, {y: 1})).toBe(false);
    expect(equals({x: 1}, {x: 1, y: 1})).toBe(false);
  });

  it("Returns a comparison of obj1 and an object with additions to the elements of obj1", () => {
    expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})).toBe(true);
    expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})).toBe(false);
  });
});