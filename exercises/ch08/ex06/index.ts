// MDN には「ES6 互換のコードを書く場合は、残余引数が推奨されます」とある。しかし、現実には arguments を使ったコードは世の中に存在する (例)。
// そのような関数を書き直す練習として、以下の関数 call を arguments を使わないように書き直しなさい

//args, call()は何の型の配列が入るか指定がないためany[]とする
const args:any[] = [];
function call(...arg: any[]) {
  args.push(Array.from(arg));
}

call(1, 2, 3);
call("A", "B");

console.log(args[0]); // [1, 2, 3]
console.log(args[1]); // ["A", "B"]
