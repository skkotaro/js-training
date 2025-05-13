// 任意の文字列を引数にとり、その文字列が JSON としてパース出来る場合 {success: true, data: <パースしたデータ>}を返し、できない場合 {success: false, error: <エラー内容>} を返す関数を書きなさい
export interface jsonObject {
    success: boolean;
    data?: object;
    error?: string;
}

export function checkParse(str: string): jsonObject {
    try {
        const data = JSON.parse(str);
        return { success: true, data };
    } catch (e) {
        if (e instanceof Error) {
            return { success: false, error: e.message };
        } else {
            return { success: false, error: String(e) };
        }
    }
}

//パースできる場合
console.log(checkParse('{"key1": "value1", "key2": "value2"}')); // { success: true, data: { name: 'John', age: 30 } }
//パースできない場合
console.log(checkParse('invalid json')); // { success: false, error: 'Unexpected end of JSON input' }