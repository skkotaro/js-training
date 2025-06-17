import { DynamicSizeArray } from "./index.ts";

describe("DynamicSizeArrayのチェックテスト", () => {
  it("配列の拡張を確認", () => {
    const dynamicArray = new DynamicSizeArray<number>();

    dynamicArray.set(0, 1);
    dynamicArray.set(1, 2);
    dynamicArray.set(2, 3);
    dynamicArray.set(10, 42); // 配列を拡張

    expect(dynamicArray.get(10)).toBe(42);
    expect(dynamicArray.get(5)).toBeUndefined(); // 未設定のインデックスは undefined
    expect(dynamicArray.length()).toBe(4);
  });

  it("未設定のインデックスにアクセスした場合", () => {
    const dynamicArray = new DynamicSizeArray<number>();

    dynamicArray.push(1);
    dynamicArray.push(2);

    expect(dynamicArray.get(5)).toBeUndefined(); // 未設定のインデックスは undefined
    expect(dynamicArray.length()).toBe(2);
  });
  it("負のインデックスにアクセスした場合", () => {
    const dynamicArray = new DynamicSizeArray<number>();

    expect(() => dynamicArray.get(-1)).toThrow("Array index out of range: -1");
    expect(() => dynamicArray.set(-1, 42)).toThrow("Array index out of range: -1");
  });
});