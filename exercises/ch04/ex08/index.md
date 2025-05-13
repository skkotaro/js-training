### 古いコードでは`void 0`のコードが存在する理由

古いJavaScriptでは`undefined`が上書き可能だったため意図せず上書きされる場合があり、確実に`undefined`の値を返すことができる`void 0`が使用されていた。

### 現在使わない理由

現在（ES5）以降では`undefined`のグローバルスコープが読み取り専用になったため上記の問題が緩和された。<br>
しかし、スコープ検索やシャドーイングを受ける通常の識別子であるため、ネストされたスコープ内でのオーバーライドの可能性は未だある。<br>
参考: https://stackoverflow.com/questions/5716976/javascript-undefined-vs-void-0
