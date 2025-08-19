// JSON.stringify を自作した stringifyJSON 関数を作成しなさい。第二引数と第三引数には対応しなくて良いものとする。
export function stringifyJSON(json) {
  if (json === null) {
    return "null";
  }
  if (typeof json === "string") {
    // 文字列内の特殊文字や制御文字をJSON仕様に合わせてエスケープする
    // 例: " → \", \ → \\, 改行やタブなどは \n, \t などに変換
    // その他の制御文字は \uXXXX 形式でエスケープ
    return '"' + json.replace(/[\\"\u0000-\u001F]/g, (c) => {
      switch (c) {
        case '"': return '\\"';
        case '\\': return '\\\\';
        case '/': return '\\/';
        case '\b': return '\\b';
        case '\f': return '\\f';
        case '\n': return '\\n';
        case '\r': return '\\r';
        case '\t': return '\\t';
        default:
          // 制御文字は \uXXXX でエスケープ
          return '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0');
      }
    }) + '"';
  }
  if (typeof json === "number" || typeof json === "boolean") {
    return String(json);
  }
  if (Array.isArray(json)) {
    const elements = json.map(stringifyJSON);
    return `[${elements.join(",")}]`;
  }
  if (typeof json === "object") {
    const entries = Object.entries(json)
      .filter(([_, value]) => typeof value !== "undefined" && typeof value !== "function" && typeof value !== "symbol")
      .map(([key, value]) => `${stringifyJSON(key)}:${stringifyJSON(value)}`);
    return `{${entries.join(",")}}`;
  }
  throw new Error("Unsupported data type");
}
