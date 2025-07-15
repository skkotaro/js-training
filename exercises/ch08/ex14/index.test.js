import { any, catching } from "./index.ts";

describe("any", () => {
  it("いずれかの関数が true を返す場合に true を返す", () => {
    const isNonZero = any(
      (n) => n > 0,
      (n) => n < 0
    );
    expect(isNonZero(0)).toBe(false); // 0 はどちらの条件も満たさない
    expect(isNonZero(42)).toBe(true); // 42 は n > 0 を満たす
    expect(isNonZero(-0.5)).toBe(true); // -0.5 は n < 0 を満たす
  });

  it("すべての関数が false を返す場合に false を返す", () => {
    const isPositive = any(
      (n) => n > 10,
      (n) => n > 20
    );
    expect(isPositive(5)).toBe(false); // 5 はどちらの条件も満たさない
  });
});

describe("catching", () => {
  it("エラーが発生しない場合、func1 の結果を返す", () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
      return { error: e.toString() };
    });
    expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 }); // 正常な JSON をパース
  });

  it("エラーが発生した場合、func2 の結果を返す", () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
      return { error: e.toString() };
    });
    expect(safeJsonParse("{Invalid Json}")).toEqual({
      error: expect.stringContaining("SyntaxError"),
    }); // 無効な JSON を処理
  });

  it("エラーが Error 型でない場合、未知のエラーをスローする", () => {
    const throwingFunc = catching(
      () => {
        throw "Not an Error"; // Error 型ではない例外をスロー
      },
      (e) => {
        return { error: e.toString() };
      }
    );
    expect(() => throwingFunc(null)).toThrow("An unknown error occurred");
  });
});