import { checkParse } from "./index.ts";
it("例題をチェックする", () => {
    // オブジェクトの値比較はtoEqualを使う
    expect(checkParse('{"key1": "value1", "key2": "value2"}')).toEqual({ success: true, data: { key1: 'value1', key2: 'value2' } });
    expect(checkParse('invalid json')).toEqual({
        success: false,
        error: `Unexpected token 'i', "invalid json" is not valid JSON`
      });
});
//決めうちじゃないテスト、、？