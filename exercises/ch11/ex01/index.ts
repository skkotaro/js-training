class Foo {}
// Map と同様のインタフェース(get, set)を持つ。ただし、key はコンストラクタ関数に限定する

// set では、 コンストラクタ関数の key と そのクラスの value のみ受け付け、それ以外の値が渡された場合はエラーとする。これにより、get で取得する値が key に指定したコンストラクタ関数のクラスであることを保証する。

// TypeScript の場合はそのような key, value の型定義とする


// プリミティブ値は、ラッパークラスのコンストラクタ関数で get/set 可能とする
export class TypeMap {
    private map = new Map<new (...args: any[]) => any, any>();

    set <T>(key: new (...args: any[]) => T, value: T): void {
        this.map.set(key, value);
    }

    get<T>(key: new (...args: any[]) => T): T | undefined {
                if (!this.map.has(key)) {
            throw new Error(`キーが存在しません`);
        }
        return this.map.get(key);
    }
}
const typeMap = new TypeMap();
typeMap.set(String, "string");
typeMap.set(Number, 123);
typeMap.set(Foo, new Foo());
// キーとバリューの型が違う場合はエラー
// typeMap.set(String, 123);

typeMap.get(String); // -> "string"
console.log(typeMap.get(String)); // "string"
typeMap.get(Number); // -> 123
console.log(typeMap.get(Number)); // 123
typeMap.get(Foo); // -> Foo {}
console.log(typeMap.get(Foo)); // Foo {}