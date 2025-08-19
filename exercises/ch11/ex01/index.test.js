import {TypeMap} from "./index.ts";
//キーとバリューの型が違う場合はTSのため省略
describe("TypeMapのテスト", () => {
    test("さまざまな型でテスト", () => {
        const typeMap = new TypeMap();
        // プリミティブ型のテスト
        typeMap.set(String, "string");
        expect(typeMap.get(String)).toBe("string");

        typeMap.set(Number, 123);
        expect(typeMap.get(Number)).toBe(123);

        // オブジェクト型のテスト
        class Foo {}
        typeMap.set(Foo, new Foo());
        expect(typeMap.get(Foo)).toBeInstanceOf(Foo);

        // 存在しないキーのテスト
        expect(() => {
            typeMap.get(Date);
        }).toThrowError("キーが存在しません");
    });

    test("同じ型をセットした場合をテスト", () => {
        const typeMap = new TypeMap();
        // 同じ型をセット
        typeMap.set(String, "string1");
        expect(typeMap.get(String)).toBe("string1");
        typeMap.set(String, "string2");
        expect(typeMap.get(String)).toBe("string2");
        // 同じ型の値を上書きしても問題ないことを確認
        typeMap.set(Number, 456);
        expect(typeMap.get(Number)).toBe(456);
    });
});