import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  const x = 1;
  let y = x; // ここを変更
  y = 2; // ここを変更
  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
