### 結果

```
Number.MAX_SAFE_INTEGER: 9007199254740991
Number.MIN_SAFE_INTEGER: -9007199254740991
Number.MAX_SAFE_INTEGER + 1: 9007199254740992
Number.MAX_SAFE_INTEGER + 2: 9007199254740992
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2: true
```

### 出力結果

`MAX_SAFE_INTEGER`以上になると上限を超え安全（正確に表せる）ではない整数になってしまい、+1, +2を比較すると数学的には正しい比較ができなくなるため<br>
参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#%E8%A7%A3%E8%AA%AC
