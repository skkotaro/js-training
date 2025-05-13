import { bitCount } from "./index.ts";

describe("equals", () => {
  it("問題文記載のテストをする", () => {
    expect(bitCount(0b111)).toBe(3);
    expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
  });
  it("境界値のテスト", () => {
    // 0のビット数は0
    expect(bitCount(0)).toBe(0);
    expect(bitCount(0xFFFFFFFF)).toBe(32);
  });
  it("負の数のテスト", () => {
    // 負の数は2の補数表現で処理される
    expect(bitCount(-0xFFFFFFFF)).toBe(1);
    expect(bitCount(-0b1)).toBe(32);
    expect(bitCount(-0b0)).toBe(0);
  });
});