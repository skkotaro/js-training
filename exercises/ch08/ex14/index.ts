// 1.
export function any(...funcs: Array<(arg: any) => boolean>): (arg: any) => boolean {
    return (arg: any): boolean => {
        for (const func of funcs) {
            if (func(arg)) {
                return true;
            }
        }
        return false;
    };
}
const isNonZero = any(
  (n) => n > 0,
  (n) => n < 0
);

console.log(isNonZero(0)); // => false
console.log(isNonZero(42)); // => true
console.log(isNonZero(-0.5)); // => true

// 2.
export function catching(func1: (arg: any) => any, func2: (error: Error) => any): (arg: any) => any {
    return (arg: any): any => {
        try {
            return func1(arg);
        } catch (e) {
            if (e instanceof Error) {
                return func2(e);
            } else {
                throw new Error("An unknown error occurred");
            }
        }
    };
}

const safeJsonParse = catching(JSON.parse, (e) => {
  return { error: e.toString() };
});

console.log(safeJsonParse('{"a": 1}')); // => {a: 1}
console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."}
