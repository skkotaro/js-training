import { soldier, MagicSoldier, soldier2, MagicSoldier2 } from "./index.ts";

describe("クラスベースの実装", () => {
    test("soldier の attack メソッドは攻撃力の2倍を返す", () => {
        const s = new soldier(10);
        expect(s.attack()).toBe(20); // 10 * 2
    });

    test("MagicSoldier の attack メソッドは攻撃力の2倍に魔力を加算した値を返す", () => {
        const ms = new MagicSoldier(10, 5);
        expect(ms.attack()).toBe(25); // (10 * 2) + 5
    });
});

describe("プロトタイプベースの実装", () => {
    test("soldier2 の attack メソッドは攻撃力の2倍を返す", () => {
        const s2 = new (soldier2 as any)(10);
        expect(s2.attack()).toBe(20); // 10 * 2
    });

    test("MagicSoldier2 の attack メソッドは攻撃力の2倍に魔力を加算した値を返す", () => {
        const ms2 = new (MagicSoldier2 as any)(10, 5);
        expect(ms2.attack()).toBe(25); // (10 * 2) + 5
    });
});