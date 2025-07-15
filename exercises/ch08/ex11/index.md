## 組み込み関数と自作関数のtoString()の出力の違い

### 確認コード

```
function func() {
    console.log("This is a function");
}
function func2() {
    return 123;
}
console.log(Math.max(1, 2, 3).toString());
console.log(func.toString());
console.log(func2.toString());
```

### 出力結果

```
> preset-ts@1.0.0 start:ts
> node --no-warnings --loader ts-node/esm exercises/ch08/ex11/index.ts

3
function func() {
    console.log("This is a function");
}
function func2() {
    return 123;
}
```

### まとめ

- 組み込み関数は関数の結果をstringにしたものが出力された
- 自作関数に関しては、returnの有無や関数内にconsole.log()の有無に関わらずfunction本体がそのまま出力された
