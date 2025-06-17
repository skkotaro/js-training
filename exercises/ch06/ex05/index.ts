// 次の条件を満たすオブジェクトを作成し、for/in ループで順番を確認しなさい。

import { text } from "stream/consumers";

// 以下のプロパティを持つオブジェクトをプロトタイプとして持つ

// プロパティ名が数値のプロパティ
// プロパティ名が文字列のプロパティ
// 列挙可能なプロパティ


// 以下のプロパティを持つ

// プロパティ名が数値かつプロトタイプの数値プロパティと同名のプロパティ
// プロパティ名が数値かつプロトタイプの数値プロパティと同名でないプロパティ
// プロパティ名が文字列かつプロトタイプの文字列プロパティと同名のプロパティ
// プロパティ名が文字列かつプロトタイプの文字列プロパティと同名でないプロパティ
// 列挙不可かつプロトタイプの列挙可能プロパティと同名のプロパティ

const objProto: any = {
    text: "text_proto",
    0: "zero_proto",
}

Object.defineProperty(objProto, "enumerable", {
  value: "enumerable_proto",
  enumerable: true
});

const obj = Object.create(objProto);
obj.text = "text";
obj.text2 = "text2";
obj[0] = "zero";
obj[1] = "one";
Object.defineProperty(obj, "enumerable", {
  value: "enumerable_not",
  enumerable: false
});

console.log("objProto:");
for (let p in objProto) {
  console.log(p);
}
console.log("\nobj:");
for (let p in obj) {
  console.log(p);
}
// 定義, 更新された順番に呼び出されている
// objProto:
// 0
// text
// enumerable

// obj:
// 0
// 1
// text
// text2