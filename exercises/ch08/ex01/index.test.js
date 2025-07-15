import { roopLog, square, currentTime } from "./index.ts";

describe("作成したアロー関数のチェックテスト", () => {
  it("roopLogの動作確認", () => {
    expect(roopLog(5, "a")).toEqual(["a", "a", "a", "a", "a"]);
    expect(roopLog(0, "a")).toEqual([]);
    expect(() => roopLog(-1, "a")).toThrow("n must be a non-negative integer");
  });
  it("squareの動作確認", () => {
    expect(square(2)).toEqual(4);
    expect(square(-3)).toEqual(9);
    expect(square(0)).toEqual(0);
  });
  it("currentTimeの動作確認", () => {
    expect(currentTime()).toEqual({now: new Date()});
});
})