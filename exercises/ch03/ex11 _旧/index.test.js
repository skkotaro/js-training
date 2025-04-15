import { equals } from "./index.js";

const obj1 = {x: 1, y: 2, z: 3};
const obj2 = {x: 1, y: 2, z: 3};
const obj3 = {x: 1, y: 2, z: 4};
const obj4 = {x: 1, y: 2};
const obj5 = {x: 1, y: 2, z: 3, w: 4};
describe("equals", () => {
  it("Returns comparisons between objects with the same value", () => {
    expect(equals(obj1, obj2)).toBe(true);
  });

  it("Returns comparisons between objects of different values", () => {
    expect(equals(obj1, obj3)).toBe(false);
  });

  it("Returns a comparison of obj1 and obj1 objects whose elements are not aligned", () => {
    expect(equals(obj1, obj4)).toBe(false);
  });

  it("Returns a comparison of obj1 and an object with additions to the elements of obj1", () => {
    expect(equals(obj1, obj5)).toBe(false);
  });
});