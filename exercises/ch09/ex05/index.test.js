// instanceofと等価な関数 instanceOf(object, constructor)を作成しなさい。
// 関数内部での instanceof の利用は不可。
// 作成した関数に対してテストを作成しなさい。
// テストケースには少なくとも以下を含むこと。

// 多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
// 継承関係にないインスタンスとクラスのコンストラクタを入力するケース

import { instanceOf } from './index.ts';

describe('instanceOf', () => {

    test("多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース", () => {
        class A {}
        class B extends A {}
        class C extends B {}
        const cInstance = new C();
        expect(instanceOf(cInstance, A)).toBe(true); // 修正: aInstance → A
    });
    test("継承関係にないインスタンスとクラスのコンストラクタを入力するケース", () => {
        class A {}
        class B extends A {}
        class D {}
        const bInstance = new B();
        const dInstance = new D();
        expect(instanceOf(bInstance, A)).toBe(true); // 修正: aInstance → A
        expect(instanceOf(dInstance, A)).toBe(false); // 修正: aInstance → A
        expect(instanceOf(dInstance, B)).toBe(false); // 修正: bInstance → B
    });

});