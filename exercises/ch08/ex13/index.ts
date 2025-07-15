const w = "World";
function f(input:string): void {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

f("console.log('Hello, World');"); // Hello, Worldが出力される
// 上記のようにstringで渡した処理を実行することができることが問題になる
// 今回はただのログ出力だが、実際には悪意のある任意のコードを実行できる