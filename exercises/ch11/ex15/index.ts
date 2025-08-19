// ベースの URLbase、追加するクエリadditionalQuery、パスpathを持つオブジェクトを引数に取り、ベースの URL のパスとクエリを修正した文字列を返す関数modifyUrlを実装しなさい。
export function modifyUrl({
    base,
    addQuery,
    path
}: {
    base: string;
    addQuery?: [string, string][];
    path?: string;
}): string {
    let url: URL;
    try {
        // baseからURLオブジェクトを生成（不正な場合は例外を投げる）
        url = new URL(base);
    } catch {
        // baseが不正なURLの場合はエラーを投げる
        throw new Error("Invalid base URL");
    }

    // pathが指定されている場合は、URLのパス部分を変更する
    if (path) {
        // pathが"/"で始まっていなければ"/"を付与し、絶対パスとして設定
        url.pathname = path.startsWith("/") ? path : "/" + path.replace(/^\.?\//, "");
    }

    // addQueryが指定されている場合は、クエリパラメータを追加する
    if (addQuery) {
        for (const [key, value] of addQuery) {
            // クエリパラメータをURLに追加（既存のクエリは維持される）
            url.searchParams.append(key, value);
        }
    }

    // 修正したURL文字列を返す
    return url.toString();
}

// テスト
// import { modifyUrl } from "./index.ts";

// describe("modifyUrl", () => {
//   it("returns URL string", () => {
//     expect(() => {
//       modifyUrl({
//         base: "invalid format",
//       });
//     }).toThrow();
//     expect(
//       modifyUrl({
//         base: "https://example.com/foo?a=b",
//       }),
//     ).toBe("https://example.com/foo?a=b");
//     expect(
//       modifyUrl({
//         base: "https://example.com/foo?a=b",
//         addQuery: [
//           ["p", "x"],
//           ["パラメータ", "y"],
//         ],
//       }),
//     ).toBe(
//       "https://example.com/foo?a=b&p=x&%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF=y",
//     );
//     expect(
//       modifyUrl({
//         base: "https://example.com/foo?a=b",
//         addQuery: [["foo", "bar"]],
//         path: "./buz",
//       }),
//     ).toBe("https://example.com/buz?a=b&foo=bar");
//   });
// });