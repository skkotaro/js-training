// 1. 複数の条件関数のいずれかが true を返すかを判定する関数
export function any(...funcs: Array<(arg: any) => boolean>): (arg: any) => boolean {
    // 引数として渡された関数群を受け取り、1つの関数を返す
    return (arg: any): boolean => {
        // 渡された関数群を順に実行し、1つでも true を返す関数があれば true を返す
        for (const func of funcs) {
            if (func(arg)) {
                return true; // 条件を満たす関数が見つかった場合
            }
        }
        return false; // すべての関数が false を返した場合
    };
}

const isNonZero = any(
  (n) => n > 0,
  (n) => n < 0
);

console.log(isNonZero(0)); // => false （0は正でも負でもない）
console.log(isNonZero(42)); // => true （42は正の数）
console.log(isNonZero(-0.5)); // => true （-0.5は負の数）

// 2. 例外をキャッチして処理を切り替える関数
export function catching(func1: (arg: any) => any, func2: (error: Error) => any): (arg: any) => any {
    // func1を実行し、例外が発生した場合はfunc2で処理する
    return (arg: any): any => {
        try {
            return func1(arg); // func1を実行
        } catch (e) {
            if (e instanceof Error) {
                return func2(e); // 例外がError型の場合、func2で処理
            } else {
                // 例外がError型でない場合、汎用的なエラーをスロー
                throw new Error("An unknown error occurred");
            }
        }
    };
}

const safeJsonParse = catching(
  JSON.parse,
  (e) => {
    return { error: e.toString() };
  }
);

console.log(safeJsonParse('{"a": 1}')); // => {a: 1} （正常にパースできた場合）
console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."} （パースに失敗した場合）