// 任意の関数とクラスを作成し、「ES6のモジュール」方式で別ファイルから利用するコードを実装しなさい。
// ただし、デフォルトのエクスポート、名前変更を伴うインポート、再エクスポートをそれぞれ実施すること。

// 挨拶と年齢表示
export default function greetEx04NameChanged(human: HumanEx04NameChanged) {
    console.log(`Hello, ${human.name}!`);
    console.log(`I am ${human.age} years old.`);
}

// Humanクラスの定義
export class HumanEx04NameChanged {
    constructor(public name: string, public age: number) {}
}

// 誕生日を祝って歳を取る関数
export function birthDayEx04NameChanged(human: HumanEx04NameChanged) {
    human.age += 1;
    console.log(`Happy birthday, ${human.name}! Now you are ${human.age} years old.`);
}