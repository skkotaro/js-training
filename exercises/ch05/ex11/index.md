### Node で debugger 文を使ってデバッグする方法を調べなさい。

任意の場所にdebbugerを挿入し、inspectコマンドを実行する<br>
debbugerが挿入されているところがbreakポイントになり、コマンドの続きで`c`を入力すると続きが実行される<br>
全てのdebbuger文を通った後に`c`をするとエラーになる

```
const user = {
  name: 'taro',
  age: 30,
  area: 'Tokyo'
}

console.log(user);

debugger;

console.log('part 1');

debugger;

console.log('part 2');
```

コマンド

```
// デバッガを呼ぶ
node inspect index.js
↓
debug> c
↓
// 1つ目のdebugger文までの実行でconsole.log(user);の結果が確認できる
< { name: 'taro', age: 30, area: 'Tokyo' }
```

```
debug> c
↓
// 2つ目のdebugger文までの実行でconsole.log('part 1');の結果が確認できる
< part 1
```

```
debug> c
↓
// 2つ目のdebugger文以降の実行でconsole.log('part 2');の結果が確認できる
< part 2
```

[参考(https://www.sejuku.net/blog/87186)](https://www.sejuku.net/blog/87186)
