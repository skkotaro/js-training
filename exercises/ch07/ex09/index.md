### 実行結果

ただconsole.logに入れた場合、どちらも「�」が出力される結果になった

### 原因

サロゲートペアを用いる文字は二つの16ビットコード単位で構成されている<br>
そのため、[0]でアクセスをすると片方のサロゲートペアを取得し正しく出力することができない

### 出力可能に修正

セグメントにして出力したところ、以下のような出力結果となった<br>
ex08で用いたセグメントにして表す方法にすると、文字として認識される単位で配列にしてくれるため「𠮷」という文字として表現することができた<br>
👨‍👨‍👧‍👧に関してはゼロ幅結合子を使用して複数の絵文字が一つの絵文字となっているため4人の男女の絵文字が出力されることになった

```
𠮷
👨‍👨‍👧‍👧 // 4人の男女になった
```

セグメント化のコード

```
const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
const segmentsYoshinoya = [...segmenter.segment("𠮷野家")];
const segmentsFamily = [...segmenter.segment("👨‍👨‍👧‍👧")];
console.log(segmentsYoshinoya[0].segment);
console.log(segmentsFamily[0].segment);
```
