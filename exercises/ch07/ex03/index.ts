export function sum(arr: number[] = []) {
  return arr.reduce((x, y) => x + y, 0);
}

export function join(arr?: (string | number | null | undefined)[], sep?: any) {
    if (arr === undefined) {
        throw new Error("引数arrが必要です");
    }
    if (sep === undefined) {
        sep = ""
    }
    return arr.reduce((x, y, i) => (x + ((i > 0 ) ? sep : "") + (y !== null ? y : ",," )), "")
}

export function reverse(arr?: any[]) {
    if (arr === undefined) {
        throw new Error("引数arrが必要です");
    }
    const result: any[] = [];
    arr.reduce((x, y, i) => {result[arr.length - (i + 1)] = y}, null);
    return result;
}

export function every<T>(
  arr: T[],
  cond: (value: T, index: number, array: T[]) => boolean
): boolean {
  let result = true;
  arr.reduce((_, y, i, a) => {
    if (!cond(y, i, a)) {
      result = false;
    }
    return null;
  }, null);
  return result;
}

export function some<T>(
  arr: T[],
  cond: (value: T, index: number, array: T[]) => boolean
): boolean {
  let result = false;
  arr.reduce((_, y, i, a) => {
    if (cond(y, i, a)) {
      result = true;
    }
    return null;
  }, null);
  return result;
}
