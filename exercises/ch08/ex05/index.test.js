import { sequenceToObject } from "./index.ts";

describe("作成したsequenceToObject関数のチェックテスト", () => {
  it("正常系の動作確認", () => {
    const a = ["a", 1, "b", 2];
    expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
    expect(sequenceToObject("x", 10, "y", 20, "z", 30)).toEqual({ x: 10, y: 20, z: 30 });
    expect(sequenceToObject()).toEqual({});
    expect(sequenceToObject("key1", "value1")).toEqual({ key1: "value1" });
    expect(sequenceToObject(...a)).toEqual({ a: 1, b: 2 });
  });

  it("異常系の動作確認", () => {
    expect(() => sequenceToObject("a", 1, "b")).toThrow("The number of arguments must be even.");
    expect(() => sequenceToObject("a", 1, 2, 3)).toThrow("Odd-indexed arguments must be strings.");
  });
});