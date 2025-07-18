// import { C } from "./index.js"; // ts でも可

// test("class puzzle", () => {
//   expect(C.method()).toBe(1);
//   expect(new C().method()).toBe(2);
//   expect(C.C.method()).toBe(3);
//   expect(new C.C().method()).toBe(4);
//   expect(new C().C.method()).toBe(5);
//   expect(new new C().C().method()).toBe(6);
// });

export class C {
    // 静的メソッド: クラス C に直接定義されたメソッド
    // C.method() で呼び出すことができる
    static method() {
        return 1; // 1 を返す
    }

    // 静的プロパティ: クラス C に直接定義されたクラス
    // C.C でアクセスできる
    static C = class {
        // 静的メソッド: C.C.method() で呼び出すことができる
        static method() {
            return 3; // 3 を返す
        }

        // インスタンスメソッド: new C.C().method() で呼び出すことができる
        method() {
            return 4; // 4 を返す
        }
    };

    // インスタンスプロパティ: クラス C のインスタンスに定義されたクラス
    // new C().C でアクセスできる
    C = class {
        // 静的メソッド: new C().C.method() で呼び出すことができる
        static method() {
            return 5; // 5 を返す
        }

        // インスタンスメソッド: new new C().C().method() で呼び出すことができる
        method() {
            return 6; // 6 を返す
        }
    };

    // インスタンスメソッド: クラス C のインスタンスに定義されたメソッド
    // new C().method() で呼び出すことができる
    method() {
        return 2; // 2 を返す
    }
}