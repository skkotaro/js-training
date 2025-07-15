## 問題9.9

```
「SOLID 原則」とは、オブジェクト指向の設計原則として従うべき 5 つの原則である。

単一責任の原則 (single-responsibility principle)
開放閉鎖の原則（open/closed principle）
リスコフの置換原則（Liskov substitution principle）
インターフェース分離の原則 (Interface segregation principle)
依存性逆転の原則（dependency inversion principle）


これら 5 つの原則についてそれぞれ説明しなさい
5 つの原則から任意の 1 つ以上を選び、原則を満たさないコードと原則を満たすコードの例を書きなさい

コードは各原則を説明するためのスケルトンコードで良く、実際に動作する必要はない
```

## 回答

### 5原則の説明

1. 単一責任の原則 (single-responsibility principle)
   - クラスは単一の機能を持ち、それを完全にカプセル化するべきであるという原則
2. 開放閉鎖の原則（Open/Closed Principle）
   - クラス、モジュール、関数などは拡張に対して開かれていて、修正に対しては閉じられているべきという原則
   - 新機能の追加は既存のコードを変更せずに済むように設計
3. リスコフの置換原則（Liskov substitution principle）
   - 親クラスのオブジェクトを子クラスのオブジェクトに置き換えても、正しく動くことを保つ原則
   - 子クラスの変更で親クラスの機能を破壊しないようにする
4. インターフェース分離の原則 (Interface segregation principle)
   - 使わないメソッドによって依存を強いられないようあるべきという原則
   - 大きなインターフェースを分割して、必要な機能のみの小さなインターフェースにする
5. 依存性逆転の原則（Dependency Inversion Principle）
   - 上位モジュールは下位モジュールから何も持ち込んではいけず、双方抽象に依存するべきという原則
