// エクスポートしないjsファイルを複数回importする場合、import文の前後やimport先のコードの実行順序はどうなりますか。実証コードを作成し、予想してから実行結果を確認しなさい。
// 任意の関数とクラスを作成し、「ES6のモジュール」方式で別ファイルから利用するコードを実装しなさい。

// 挨拶と年齢表示
function greet(human: Human) {
    console.log(`Hello, ${human.name}!`);
    console.log(`I am ${human.age} years old.`);
}

// Humanクラスの定義
class Human {
    constructor(public name: string, public age: number) {}
}

// 誕生日を祝って歳を取る関数
function birthDay(human: Human) {
    human.age += 1;
    console.log(`Happy birthday, ${human.name}! Now you are ${human.age} years old.`);
}

const human = new Human('Alice', 30);
greet(human);
birthDay(human);