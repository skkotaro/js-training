// 固定長配列のインターフェース
export interface FixedSizeArray<T> {
  get(index: number): T | undefined; // 指定されたインデックスの値を取得
  set(index: number, value: T): void; // 指定されたインデックスに値を設定
  length(): number; // 配列の長さを取得
}

// 固定長配列を作成する関数
export function makeFixedSizeArray<T>(size: number): FixedSizeArray<T> {
  const array = new Array<T>(size);
  return {
    get(index: number): T | undefined {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index: number, value: T): void {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length(): number {
      return array.length;
    },
  };
}

// 動的配列のクラス
export class DynamicSizeArray<T> {
  static INITIAL_SIZE = 4; // 初期サイズ

  private len: number; // 現在の要素数
  private array: FixedSizeArray<T>; // 内部の固定長配列

  constructor() {
    this.len = 0;
    this.array = makeFixedSizeArray<T>(DynamicSizeArray.INITIAL_SIZE);
  }

  get(index: number): T | undefined {
    if (index < 0) {
    throw new Error(`Array index out of range: ${index}`);
    }

    // インデックスが現在の要素数を超えている場合は undefined を返す
    if (index >= this.array.length()) {
      return undefined;
    }

    return this.array.get(index);
  }

  set(index: number, value: T): void {
    if (index < 0) {
      throw new Error(`Array index out of range: ${index}`);
    } else if (index >= this.array.length()) {
      const old = this.array;
      this.array = makeFixedSizeArray<T>(index + 1); // 配列を拡張
      for (let i = 0; i < old.length(); i++) {
        this.array.set(i, old.get(i)!);
      }
      this.array.set(index, value);
      this.len += 1;
    } else {
      if (!this.array.get(index)) {
        this.len += 1;
      }
      this.array.set(index, value);
    }
  }

  length(): number {
    return this.len;
  }

  push(value: T): void {
    const old = this.array;
    this.array = makeFixedSizeArray<T>(old.length() * 2);
    for (let i = 0; i < old.length(); i++) {
      this.array.set(i, old.get(i)!);
    }
    this.array.set(this.len, value);
    this.len += 1;
  }
}