// 以下の各関数を実装しなさい
// 1.日本語文字列の配列を受け取り、文字列中の大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視してソートする sortJapanese 関数
// 2.Date オブジェクトを受け取り、令和6年4月2日 のように (和暦)y年m月d日 のフォーマットで日付の文字列を返す toJapaneseDateString 関数

import { sortJapanese, toJapaneseDateString } from "./index";

// sortJapanese のテスト
describe("sortJapanese", () => {
  it("濁点・半濁点・小書き文字・大文字小文字を無視してソートできる", () => {
    const arr = ["ばなな", "はな", "バナナ", "ぱなな", "はな", "ハナ", "つき", "っき", "ツキ"];
    const sorted = sortJapanese(arr);
    // "はな"と"ハナ"、"ばなな"と"バナナ"と"ぱなな"、"つき"と"ツキ"と"っき"が同じ扱いになる
    expect(sorted).toEqual([
      "はな", "はな", "ハナ", "ばなな", "バナナ", "ぱなな", "つき", "っき", "ツキ"
    ].sort((a, b) => a.localeCompare(b, "ja-JP", { sensitivity: "base" })));
  });
});

// toJapaneseDateString のテスト
describe("toJapaneseDateString", () => {
  it("令和6年4月2日 の形式で返す", () => {
    const date = new Date(2024, 3, 2); // 2024年4月2日
    expect(toJapaneseDateString(date)).toBe("令和6年4月2日");
  });
  it("平成の例", () => {
    const date = new Date(1995, 6, 7); // 1995年7月7日
    expect(toJapaneseDateString(date)).toBe("平成7年7月7日");
  });
  it("昭和の例", () => {
    const date = new Date(1970, 0, 1); // 1970年1月1日
    expect(toJapaneseDateString(date)).toBe("昭和45年1月1日");
  });
  it("大正の例", () => {
    const date = new Date(1920, 11, 31); // 1920年12月31日
    expect(toJapaneseDateString(date)).toBe("大正9年12月31日");
  });
  it("明治の例", () => {
    const date = new Date(1890, 4, 10); // 1890年5月10日
    expect(toJapaneseDateString(date)).toBe("明治23年5月10日");
  });
});