// 以下の各関数を実装しなさい
// 1.日本語文字列の配列を受け取り、文字列中の大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視してソートする sortJapanese 関数
// 2.Date オブジェクトを受け取り、令和6年4月2日 のように (和暦)y年m月d日 のフォーマットで日付の文字列を返す toJapaneseDateString 関数

export function sortJapanese(arr: string[]): string[] {
    const japaneseCollator = new Intl.Collator('ja-JP', { sensitivity: 'base' }).compare;
    return arr.sort(japaneseCollator);
}

export function toJapaneseDateString(date: Date): string {
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
const japaneseStrings = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"];
console.log(sortJapanese(japaneseStrings)); // ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"]

const date = new Date(2024, 3, 2); // 令和6年4月2日
console.log(toJapaneseDateString(date)); // 令和6年4月2日