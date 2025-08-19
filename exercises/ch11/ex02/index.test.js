import { cache, slowFn } from "./index.js";

describe("cache関数のテスト", () => {
    test("キャッシュが正しく動作する", () => {

        const cachedSlowFn = cache(slowFn);

        // 初回呼び出し
        const obj1 = { number: 5 };
        expect(cachedSlowFn(obj1)).toBe(5); // フィボナッチ数列の結果
        expect(cachedSlowFn.getCacheCount()).toBe(0); // 初回はキャッシュが使用されない

        // 同じ引数での2回目の呼び出し
        expect(cachedSlowFn(obj1)).toBe(5); // キャッシュが使用される
        expect(cachedSlowFn.getCacheCount()).toBe(1); // キャッシュが使用された回数を確認

        // 異なる引数での呼び出し
        const obj2 = { number: 6 };
        expect(cachedSlowFn(obj2)).toBe(8); // フィボナッチ数列の結果
        expect(cachedSlowFn.getCacheCount()).toBe(1); // obj2 はキャッシュ未使用

        // 再度 obj1 を呼び出し
        expect(cachedSlowFn(obj1)).toBe(5); // キャッシュが使用される
        expect(cachedSlowFn.getCacheCount()).toBe(2); // キャッシュが使用された回数を確認
    });

    test("異なる引数での呼び出し", () => {
        const cachedSlowFn = cache(slowFn);

        const obj1 = { number: 5 };
        const obj2 = { number: 6 };

        // 初回呼び出し
        expect(cachedSlowFn(obj1)).toBe(5); // フィボナッチ数列の結果
        expect(cachedSlowFn(obj2)).toBe(8); // フィボナッチ数列の結果
        expect(cachedSlowFn.getCacheCount()).toBe(0); // 初回はキャッシュが使用されない
    });

    test("キャッシュが異なるオブジェクトで動作する", () => {
        const cachedSlowFn = cache(slowFn);

        const obj1 = { number: 10 };
        const obj2 = { number: 10 }; // 内容は同じだが別のオブジェクト

        expect(cachedSlowFn(obj1)).toBe(55); // 初回は計算が行われる
        expect(cachedSlowFn(obj2)).toBe(55); // 別のオブジェクトなので再計算される
        expect(cachedSlowFn.getCacheCount()).toBe(0); // キャッシュは使用されない
    });
});