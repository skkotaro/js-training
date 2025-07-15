import { exponentiation } from "./index.ts";

describe("作成したべき乗関数のチェックテスト", () => {
  it("べき乗の動作確認", () => {
    expect(exponentiation(2, 3)).toEqual(8);
    expect(exponentiation(5, 0)).toEqual(1);
    expect(() => exponentiation(-1, -1)).toThrow("Exponent must be a non-negative integer.");
  });
});
