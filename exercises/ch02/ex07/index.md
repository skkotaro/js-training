## 問題2.7の実行結果

0 1 0
1 1 0

### 理由

以下と同じ挙動になっているため

```
let a = 0,
  b = 0;

const c = a
++ b

console.log(a, b, c);

const e = a++
b;

console.log(a, b, e);

```
