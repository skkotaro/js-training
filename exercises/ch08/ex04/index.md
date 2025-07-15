### 予想

p208に「アロー関数以外の入れ子型の関数は外側のthisの値を継承しません。入れ子型の関数がメソッドとして呼び出された場合、関数を呼び出したオブジェクトがthisの値になります。」<br>
とあるため、nmはobjを継承せずfalseになりnestがtrueになる。逆にarrowの場合は外側のthisを継承するためobjがtrueでnestがfalseとなる

### 結果

予想通り下記の結果となった

```
console.log(this === obj, this === nest); // => false true
console.log(this === obj, this === nest); // => true false
```
