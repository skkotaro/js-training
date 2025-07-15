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
    static method() {
        return 1;
    }
    static C = class {
        static method() {
            return 3;
        }
        method() {
            return 4;
        }
    };
    C = class {
        static method() {
            return 5;
        }
        method() {
            return 6;
        }
    }; // インスタンスプロパティとして独自のクラスを定義
    method() {
        return 2;
    }// インスタンスプロパティとして独自のクラスを定義
}