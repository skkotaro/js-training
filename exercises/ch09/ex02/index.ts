// ゲッターメソッドは値の取得以外の処理も記述することができる。
// 一例として、以下のような値を読み出す度にその値が 1 ずつ増えていくゲッターを持つクラスを作りなさい(初回呼び出しは0を返す)。
// また一方で、このようなクラス構造は一般的に良くないとされている。
// このクラスの問題点を説明しなさい。
// import { C } from "./index.js"; // ts でも可

// test("", () => {
//   const c = new C();
//   expect(c.x).toBe(0);
//   expect(c.x).toBe(1);
//   expect(c.x).toBe(2);
// });

export class C {
    private counter = 0;

    get x() {
        return this.counter++;
    }
}

