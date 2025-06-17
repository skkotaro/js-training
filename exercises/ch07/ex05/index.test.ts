/* eslint no-sparse-arrays: 0 */
import {pop, push, shift, unshift, sort} from "./index.ts";

describe("テスト", () => {
  it("値が正しいかつ日は快適かを確認", () => {
    const seq = [1, 2, 3, 4, 5];
    expect(pop(seq)).toStrictEqual([1, 2, 3, 4]);
    expect(push(seq, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(shift(seq)).toStrictEqual([2, 3, 4, 5]);
    expect(unshift(seq, 0)).toStrictEqual([0, 1, 2, 3, 4, 5]);
    expect(sort(seq, (a, b) => b - a)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(sort(seq)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it("カスタム比較関数の動作を確認", () => {
    const seq = [5, 3, 4, 1, 2];
expect(sort(seq, (a, b) => a - b)).toStrictEqual([1, 2, 3, 4, 5]); // 昇順
expect(sort(seq, (a, b) => b - a)).toStrictEqual([5, 4, 3, 2, 1]); // 降順
expect(seq).toStrictEqual([5, 3, 4, 1, 2]); // 元の配列は変更されない
  });
});