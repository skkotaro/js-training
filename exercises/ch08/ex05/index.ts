// 可変長引数を受け取り、以下の仕様でオブジェクトを返却する関数 sequenceToObject(...values)を作成しなさい。

// 奇数番に string の値を受け取り偶数番に任意の値を受け取り、各偶数奇数のペアで {奇数番の値: 偶数番の値}の形式になるオブジェクトを返却する。例えばsequenceToObject("a", 1, "b", 2)は{a: 1, b: 2}を返却する
// いずれかの奇数番の値が string でない場合、または値の個数の合計が偶数ではない場合は例外を発生させる

// また作成した sequenceToObject に対してスプレッド演算子で配列を与えられることを確認しなさい。
export function sequenceToObject (...values: (string | number)[]) {
  const result: { [key: string]: number } = {};
  for (let i = 0; i < values.length; i += 2) {
    if (values[i + 1] === undefined) {
        throw new Error("The number of arguments must be even.");
    }
    const key = values[i];
    const value = values[i + 1];
    if (typeof key !== "string") {
      throw new Error("Odd-indexed arguments must be strings.");
    }
    result[key] = value as number;
  }
  return result;
}