//値が数値のプロパティのオブジェクトを引数に取り、数値のプロパティを持つオブジェクトを返す
export function objectEven(obj: { [key: string]: number }): { [key: string]: number } {
    // 新しいオブジェクトを作成
    const result: { [key: string]: number } = {};
    //引数のオブジェクトのプロパティでループ
    for (const key in obj) {
        // オブジェクトのプロパティが数値で、偶数の場合、新しいオブジェクトに追加する
        if (obj[key] % 2 === 0) {
            result[key] = obj[key];
        }
    }
    return result;
}

