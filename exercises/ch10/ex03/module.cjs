//任意の関数とクラスを作成し、「Nodeのモジュール」方式で別ファイルから利用するコードを実装しなさい
function greetEx03NameChanged(human) {
    console.log(`Hello, ${human.name}!`);
    console.log(`I am ${human.age} years old.`);
}

class HumanEx03NameChanged {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


exports.greetEx03 = greetEx03NameChanged;
exports.HumanEx03 = HumanEx03NameChanged;