export function fibonacciFor(): number[] {
    const fib: number[] = [1, 1];
    for (let i = 2; i < 10; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

export function fibonacciDoWhile(): number[] {
    const fib: number[] = [1, 1];
    let i = 2;
    do {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    } while (i < 10);
    return fib;
}
console.log(fibonacciFor());
console.log(fibonacciDoWhile());