const seq = [1, 2, 3, 4, 5];

export function pop(arr: any[]) {
    return arr.slice(0, -1);
}

export function push(arr: any[], value: any) {
    return [...arr, value];
}
export function shift(arr: any[]) {
    return arr.slice(1);
}
export function unshift(arr: any[], value: any) {
    return [value, ...arr];
}
export function sort(arr: any[], compareFn?: (a: any, b: any) => any) {
    const copy = [...arr];
    return copy.sort(compareFn);
}
