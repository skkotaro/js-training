import { add, sub, mul, div } from "./index.ts";

describe("複素数の演算テスト", () => {
  it("加算のテスト", () => {
    expect(add({ re: 1, im: 2 }, { re: 3, im: 4 })).toEqual({ re: 4, im: 6 });
    expect(add({ re: -1, im: -2 }, { re: 3, im: 4 })).toEqual({ re: 2, im: 2 });
    expect(add({ re: -1, im: -2 }, { re: -3, im: -4 })).toEqual({ re: -4, im: -6 }); // 両方マイナス
    expect(add({ re: 0, im: 0 }, { re: 0, im: 0 })).toEqual({ re: 0, im: 0 });
  });

  it("減算のテスト", () => {
    expect(sub({ re: 1, im: 2 }, { re: 3, im: 4 })).toEqual({ re: -2, im: -2 });
    expect(sub({ re: -1, im: -2 }, { re: 3, im: 4 })).toEqual({ re: -4, im: -6 });
    expect(sub({ re: -1, im: -2 }, { re: -3, im: -4 })).toEqual({ re: 2, im: 2 }); // 両方マイナス
    expect(sub({ re: 0, im: 0 }, { re: 0, im: 0 })).toEqual({ re: 0, im: 0 });
  });

  it("乗算のテスト", () => {
    expect(mul({ re: 1, im: 2 }, { re: 3, im: 4 })).toEqual({ re: -5, im: 10 });
    expect(mul({ re: -1, im: -2 }, { re: 3, im: 4 })).toEqual({ re: 5, im: -10 });
    expect(mul({ re: -1, im: -2 }, { re: -3, im: -4 })).toEqual({ re: -5, im: 10 }); // 両方マイナス
    expect(mul({ re: 0, im: 0 }, { re: 3, im: 4 })).toEqual({ re: 0, im: 0 });
  });

  it("除算のテスト", () => {
    expect(div({ re: 1, im: 2 }, { re: 3, im: 4 })).toEqual({ re: 0.44, im: 0.08 });
    expect(div({ re: -1, im: -2 }, { re: 3, im: 4 })).toEqual({ re: -0.44, im: -0.08 });
    expect(div({ re: -1, im: -2 }, { re: -3, im: -4 })).toEqual({ re: 0.44, im: 0.08 }); // 両方マイナス
    expect(div({ re: 0, im: 0 }, { re: 3, im: 4 })).toEqual({ re: 0, im: 0 });
  });
});