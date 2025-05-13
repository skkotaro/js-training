
// 文字列のパラメータを取り、制御文字など文字列リテラル作成時エスケープシーケンスで記述する必要がある文字 (p37 表 3-1 の\\より上)を、エスケープシーケンスに変換した文字列を返すメソッドを書きなさい。例えば文字列中に\が含まれていたら、\\に変換しなさい。if-else で分岐するバージョンと switch で分岐するバージョンの両方を作りなさい。
class EscapeString {
    withIfElse(str: string): string {
        let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '\0') {
            result += '\\0';
        } else if (char === '\b') {
            result += '\\b';
        } else if (char === '\t') {
            result += '\\t';
        } else if (char === '\n') {
            result += '\\n';
        } else if (char === '\v') {
            result += '\\v';
        } else if (char === '\f') {
            result += '\\f';
        } else if (char === '\r') {
            result += '\\r';
        } else if (char === '"') {
            result += '\\"';
        } else if (char === '\'') {
            result += '\\\'';
        } else if (char === '\\') {
            result += '\\\\';
        } else {
            result += char;
        }
    }
    return result;
    }
    withSwitch(str: string): string {
        let result = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            switch (char) {
                case '\0':
                    result += '\\0';
                    break;
                case '\b':
                    result += '\\b';
                    break;
                case '\t':
                    result += '\\t';
                    break;
                case '\n':
                    result += '\\n';
                    break;
                case '\v':
                    result += '\\v';
                    break;
                case '\f':
                    result += '\\f';
                    break;
                case '\r':
                    result += '\\r';
                    break;
                case '"':
                    result += '\\"';
                    break;
                case '\'':
                    result += '\\\'';
                    break;
                case '\\':
                    result += '\\\\';
                    break;
                default:
                    result += char;
                    break;
            }
        }
        return result;
    }
}

const es = new EscapeString();
console.log(es.withIfElse("Hello\0\b\t\n\v\f\r\"\'\\\0World"));
console.log(es.withSwitch("Hello\0\b\t\n\v\f\r\"\'\\\0World"));