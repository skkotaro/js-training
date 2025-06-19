export function assign(target: any, ...sources: any[]): any {
    // target が null または undefined の場合はエラーをスロー
    if (target == null) throw new TypeError("Cannot convert undefined or null to object");

    // target をオブジェクトに変換し、結果として使用する
    const result = Object(target);

    // sources 配列内の各オブジェクトを処理
    for (const source of sources) {
        // source が null または undefined の場合はスキップ
        if (source == null) continue;

        // source のすべての列挙可能なキーを取得して result にコピー
        for (const key of Object.keys(source)) {
            result[key] = source[key]; // キーと値をコピー
        }

        // source のすべてのシンボルプロパティを取得して result にコピー
        for (const sym of Object.getOwnPropertySymbols(source)) {
            // シンボルプロパティが列挙可能かどうかを確認
            if (source.propertyIsEnumerable(sym)) {
                result[sym] = source[sym]; // シンボルプロパティをコピー
            }
        }
    }

    // 結果のオブジェクトを返す
    return result;
}