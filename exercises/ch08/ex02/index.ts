export function exponentiation(base: number, exponent: number): number {
    if (base === 0 || base === 1) {
        return base;
    }
    if (exponent < 0) {
        throw new Error("Exponent must be a non-negative integer.");
    } else if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else if ((exponent % 2) === 0) {
        return exponentiation(base * base, exponent / 2);
    } else {
        return base * exponentiation(base, exponent - 1);
    }
}

console.log(exponentiation(0, 100));