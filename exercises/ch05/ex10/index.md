## 説明

以下のようにwith文を用いると、変数名とプロパティ名が同じ場合、どちらに代入する/されるかが分かりづらくなるため混乱を招く可能性がある。

### 1ブロック

1ブロック目ではa,bどちらもobjのプロパティにあるため、with文ではobjのaにobjのbが代入されている。よって下記のように修正される。

```
obj.a = obj.b;
```

### 2ブロック

2ブロック目ではbのみobjのプロパティにあるため、with文では変数aにobjのbが代入される。よって下記のように修正される。

```
a = obj.b;
```

### 3ブロック

3ブロック目ではaのみobjのプロパティにあるため、with文ではobjのaに変数bが代入される。よって下記のように修正される。

```
obj.a = b;
```

### 4ブロック

4ブロック目ではプロパティが空のため、with文では変数aに変数bが代入される。よって下記のように修正される。

```
a = b;
## コード
### 修正前
```

{
let a = 1;
let b = 2;
let obj = { a: 3, b: 4 };
with (obj) {
a = b;
}
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 1, b: 2, obj: { a: 4, b: 4 }}
// with 文を使わずに同じ処理を書く場合: obj.a = obj.b
}
{
let a = 1;
let b = 2;
let obj = { b: 4 };
with (obj) {
a = b;
}
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 4, b: 2, obj: { b: 4 }}
}
{
let a = 1;
let b = 2;
let obj = { a: 3 };
with (obj) {
a = b;
}
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 1, b: 2, obj: { a: 2 }}
}
{
let a = 1;
let b = 2;
let obj = {};
with (obj) {
a = b;
}
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 2, b: 2, obj: {} }
}

```
### 修正後
```

{
let a = 1;
let b = 2;
let obj = { a: 3, b: 4 };
obj.a = obj.b;
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 1, b: 2, obj: { a: 4, b: 4 }}
// with 文を使わずに同じ処理を書く場合: obj.a = obj.b
}
{
let a = 1;
let b = 2;
let obj = { b: 4 };
a = obj.b;
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 4, b: 2, obj: { b: 4 }}
}
{
let a = 1;
let b = 2;
let obj = { a: 3 };
obj.a = b;
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 1, b: 2, obj: { a: 2 }}
}
{
let a = 1;
let b = 2;
let obj = {};
a = b;
console.log(JSON.stringify({ a, b, obj }, null));
// console.log の出力: { a: 2, b: 2, obj: {} }
}

```

```
