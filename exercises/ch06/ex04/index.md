## 結果表

| 属性の組み合わせ                                     | そのまま                                          | 変更後                                            | 削除後                                             |
| ---------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| writable:false, enumerable:false, configurable:false | hasOwnProperty: true, propertyIsEnumerable: false | TypeError                                         | TypeError                                          |
| writable:false, enumerable:false, configurable:true  | hasOwnProperty: true, propertyIsEnumerable: false | TypeError                                         | hasOwnProperty: false, propertyIsEnumerable: false |
| writable:false, enumerable:true, configurable:false  | hasOwnProperty: true, propertyIsEnumerable: true  | TypeError                                         | TypeError                                          |
| writable:false, enumerable:true, configurable:true   | hasOwnProperty: true, propertyIsEnumerable: true  | TypeError                                         | hasOwnProperty: false, propertyIsEnumerable: false |
| writable:true, enumerable:false, configurable:false  | hasOwnProperty: true, propertyIsEnumerable: false | hasOwnProperty: true, propertyIsEnumerable: false | TypeError                                          |
| writable:true, enumerable:false, configurable:true   | hasOwnProperty: true, propertyIsEnumerable: false | hasOwnProperty: true, propertyIsEnumerable: false | hasOwnProperty: false, propertyIsEnumerable: false |
| writable:true, enumerable:true, configurable:false   | hasOwnProperty: true, propertyIsEnumerable: true  | hasOwnProperty: true, propertyIsEnumerable: true  | TypeError                                          |
| writable:true, enumerable:true, configurable:true    | hasOwnProperty: true, propertyIsEnumerable: true  | hasOwnProperty: true, propertyIsEnumerable: true  | hasOwnProperty: false, propertyIsEnumerable: false |

## 影響の確認

### writable

- true時、プロパティの変更が常に可能になる
- false時、TypeErrorが出力される

### enumerable

- true時、propertyIsEnumerableの結果が常にtrueになる（列挙可能）

### configurable

- true時、プロパティの削除が常に可能となる
- false時、TypeErrorが出力される

### hasOwnProperty, propertyIsEnumerableについて

- プロパティがある場合はhasOwnPropertyが常にtrueになる
- プロパティが削除されるとhasOwnProperty, propertyIsEnumerableはfalseになる
