### 予想

予想としては、実行元のファイルのコード順に従い実行されると思っていた。<br>
また、テキストから同じモジュールからは一度しか実行されないため二回目は無視される

### 結果

結果としてはまず初めにインポートしたモジュールが実行されその後実行元のコードが<br>
コード順に従い実行された<br>
実行ファイル

```
console.log("import1回目前");
import "./module.ts";
console.log("import1回目後");
import "./module2.ts";
console.log("import2回目前");
import "./module.ts";
console.log("import2回目後");
```

実行結果

```
// module.ts の実行内容
Hello, Alice!
I am 30 years old.
Happy birthday, Alice! Now you are 31 years old.

// module2.ts の実行内容
Hello, John!
I am 77 years old.
Happy birthday, John! Now you are 78 years old.

// module2.ts の実行内容
import1回目前
import1回目後
import2回目前
import2回目後
```
