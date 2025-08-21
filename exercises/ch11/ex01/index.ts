class Foo {}
export class TypeMap {
    // コンストラクタ関数をキー、インスタンスを値として保持するMap
    private map = new Map<new (...args: any[]) => any, any>();

    // 指定したコンストラクタ関数とインスタンスをMapに登録する
    set <T>(key: new (...args: any[]) => T, value: T): void {
        // key（コンストラクタ関数）とvalue（インスタンス）をMapに保存
        this.map.set(key, value);
    }

    // 指定したコンストラクタ関数に対応するインスタンスを取得する
    get<T>(key: new (...args: any[]) => T): T | undefined {
        // キーが存在しない場合はエラーを投げる
        if (!this.map.has(key)) {
            throw new Error(`キーが存在しません`);
        }
        // キーに対応する値（インスタンス）を返す
        return this.map.get(key);
    }
}
const typeMap = new TypeMap();
typeMap.set(String, "string");
typeMap.set(Number, 123);
typeMap.set(Foo, new Foo());

typeMap.get(String); // -> "string"
console.log(typeMap.get(String)); // "string"
typeMap.get(Number); // -> 123
console.log(typeMap.get(Number)); // 123
typeMap.get(Foo); // -> Foo {}
console.log(typeMap.get(Foo)); // Foo {}