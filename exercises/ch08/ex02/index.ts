export function exponentiation(base: number, exponent: number): number {
    // 基数が 0 または 1 の場合、結果は基数そのもの（0^n = 0, 1^n = 1）
    if (base === 0 || base === 1) {
        return base;
    }
    // 指数が負の場合はエラーをスロー（非負の整数のみ許容）
    if (exponent < 0) {
        throw new Error("Exponent must be a non-negative integer.");
    } 
    // 指数が 0 の場合、結果は常に 1（n^0 = 1）
    else if (exponent === 0) {
        return 1;
    } 
    // 指数が 1 の場合、結果は基数そのもの（n^1 = n）
    else if (exponent === 1) {
        return base;
    } 
    // 指数が偶数の場合、再帰的に (base^2)^(exponent/2) を計算
    else if ((exponent % 2) === 0) {
        return exponentiation(base * base, exponent / 2);
    } 
    // 指数が奇数の場合、base * base^(exponent-1) を計算
    else {
        return base * exponentiation(base, exponent - 1);
    }
}
