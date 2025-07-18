//args, call()は何の型の配列が入るか指定がないためany[]とする
const args:any[] = [];
// arguments を使わずに可変長引数を受け取る関数 call を定義
function call(...arg: any[]) {
  args.push(Array.from(arg));
}

call(1, 2, 3);
call("A", "B");

console.log(args[0]); // [1, 2, 3]
console.log(args[1]); // ["A", "B"]
