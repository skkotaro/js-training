// 1.特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
// 2.期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
// 3.'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
// 4.ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。ただし getMonth、setMonth は利用してはいけない。
export function daysInMonth(year: number, month: number) {
    if (month < 1 || month > 12) {
        throw new Error("月は1から12の範囲で指定してください");
    }
    // 月の最終日を取得するために次の月の1日から1日引く
    const date = new Date(year, month, 0);
    return date.getDate();
}

export function businessDays(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // 開始日から終了日までの日付をループ
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        // 曜日を取得 (0: 日曜日, 6: 土曜日)
        const day = date.getDay();
        // 土日以外の日であればカウント
        if (day !== 0 && day !== 6) {
            count++;
        }
    }
    return count;
}

export function getWeekday(dateString: string, locale: string) {
    const date = new Date(dateString);
    // ロケールに応じた曜日のフォーマットを取得
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

export function firstDayOfLastMonth() {
    //JSTとしての現在の日付を取得→console.logする時はJSTに合わせないといけない
    const now = new Date();
    // 現在の月を1つ前にするために月を-1する
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    // ローカルタイムゾーンで先月の1日0時0分0秒のDateオブジェクトを返す
    return new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1, 0, 0, 0);
}
const date = firstDayOfLastMonth();
console.log(date.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));