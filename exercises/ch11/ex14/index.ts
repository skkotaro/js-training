// 日本語の文字列配列を五十音順でソートする関数
export function sortJapanese(arr: string[]): string[] {
    // 日本語用のCollator（比較関数）を作成
    const japaneseCollator = new Intl.Collator('ja-JP', { sensitivity: 'base' }).compare;
    // 比較関数を使ってソート
    return arr.sort(japaneseCollator);
}

// Dateオブジェクトを和暦（例: 令和6年4月2日）形式の文字列に変換する関数
export function toJapaneseDateString(date: Date): string {
    // 和暦・年月日・元号を含むフォーマットオプション
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        era: 'long', // ← 'long' に変更
    };
    // 例: "令和6年4月2日" の形で返す
    const str = date.toLocaleDateString('ja-JP-u-ca-japanese', options);
    // 正規表現で「令和6/4/2」→「令和6年4月2日」に変換
    return str.replace(/^(.+?)(\d+)\/(\d+)\/(\d+)$/, (_, era, year, month, day) =>
        `${era}${year}年${month}月${day}日`
    );
}

// テスト
const japaneseStrings = ["あ", "い", "う", "え", "お", "か","あ","あ","あ","あ","あ", "き", "く", "け", "こ"];
console.log(sortJapanese(japaneseStrings)); // ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"]

const date = new Date(2024, 3, 2); // 令和6年4月2日
console.log(toJapaneseDateString(date)); // 令和6年4月2日