import { fromLittleToBigEndian, fromBigToLittleEndian } from "./index";

describe("エンディアン変換関数のテスト", () => {
  test("fromLittleToBigEndian: リトルエンディアンからビッグエンディアンへの変換", () => {
    const input = new Uint32Array([0x12345678, 0xabcdef01]);
    const expected = new Uint32Array([0x78563412, 0x01efcdab]);

    const result = fromLittleToBigEndian(input);

    expect(result).toEqual(expected);
  });

  test("fromBigToLittleEndian: ビッグエンディアンからリトルエンディアンへの変換", () => {
    const input = new Uint32Array([0x78563412, 0x01efcdab]);
    const expected = new Uint32Array([0x12345678, 0xabcdef01]);

    const result = fromBigToLittleEndian(input);

    expect(result).toEqual(expected);
  });

  test("空の配列を渡した場合", () => {
    const input = new Uint32Array([]);
    const expected = new Uint32Array([]);

    const result1 = fromLittleToBigEndian(input);
    const result2 = fromBigToLittleEndian(input);

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  test("単一の値を変換する場合", () => {
    const input = new Uint32Array([0x12345678]);
    const expectedLittleToBig = new Uint32Array([0x78563412]);
    const expectedBigToLittle = new Uint32Array([0x78563412]);

    const result1 = fromLittleToBigEndian(input);
    const result2 = fromBigToLittleEndian(expectedLittleToBig);
    const result3 = fromBigToLittleEndian(input);
    const result4 = fromLittleToBigEndian(expectedBigToLittle);
    expect(result1).toEqual(expectedLittleToBig);
    expect(result2).toEqual(input);
    expect(result3).toEqual(expectedBigToLittle);
    expect(result4).toEqual(input);
  });
});