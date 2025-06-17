import { getAllPropertyName } from "./index.ts";

describe("getAllPropertyName", () => {
  it("独自プロパティ（文字列・Symbol）を取得できる", () => {
    const sym = Symbol("c");
    const obj: any = { a: 1, b: 2, [sym]: 3, d: 4 };
    const result = getAllPropertyName(obj);
    expect(result).toEqual(expect.arrayContaining(["a", "b", "d", sym.toString()]));
    expect(result.length).toBe(4);
  });

  it("継承した列挙可能プロパティも取得できる", () => {
    const parent: any = { inherited: 1 };
    const child: any = Object.create(parent);
    child.own = 2;
    const result = getAllPropertyName(child);
    expect(result).toEqual(expect.arrayContaining(["own", "inherited"]));
  });

  it("列挙不可プロパティも独自プロパティとして取得できる", () => {
    const obj: any = {};
    Object.defineProperty(obj, "hidden", {
      value: 42,
      enumerable: false
    });
    const result = getAllPropertyName(obj);
    expect(result).toContain("hidden");
  });

  it("継承プロパティは列挙可能なもののみ取得する", () => {
    const parent: any = {};
    Object.defineProperty(parent, "hiddenParent", {
      value: 1,
      enumerable: false
    });
    parent.visibleParent = 2;
    const child: any = Object.create(parent);
    child.own = 3;
    const result = getAllPropertyName(child);
    expect(result).toContain("own");
    expect(result).toContain("visibleParent");
    expect(result).not.toContain("hiddenParent");
  });
});