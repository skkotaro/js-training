// このような関数は絶対に書いてはならない。
function set42(key: string) {
  eval(`${key} = 42;`);
}

// 例:
let hello: number = 0;
// set42("hello");
//無限ループに入る
set42("while (hello !== 10) hello");
console.log(hello); // 42

