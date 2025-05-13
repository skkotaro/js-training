import { fibonacciFor, fibonacciDoWhile } from "./index.ts";
it("それぞれでフィボナッチをチェックする", () => {
    const answerFib: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    // 配列の値比較はtoEqualを使う
    expect(fibonacciFor()).toEqual(answerFib);
    expect(fibonacciDoWhile()).toEqual(answerFib);
});