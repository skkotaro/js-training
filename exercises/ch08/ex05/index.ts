export function sequenceToObject(...values: (string | number)[]) {
  // 結果を格納するオブジェクトを初期化
  const result: { [key: string]: number } = {};

  // 引数を2つずつ処理するループ
  for (let i = 0; i < values.length; i += 2) {
    // 偶数奇数のペアが揃っていない場合はエラーをスロー
    if (values[i + 1] === undefined) {
      throw new Error("The number of arguments must be even.");
    }

    // 奇数番目の値をキー、偶数番目の値を値として取得
    const key = values[i];
    const value = values[i + 1];

    // 奇数番目の値が文字列でない場合はエラーをスロー
    if (typeof key !== "string") {
      throw new Error("Odd-indexed arguments must be strings.");
    }

    // 結果オブジェクトにキーと値を追加
    result[key] = value as number;
  }

  // 作成したオブジェクトを返却
  return result;
}