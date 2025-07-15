// 以下の仕様に基づいて RPG の戦士クラスと魔力を持った戦士である魔法戦士クラスをそれぞれ class を使った記法と prototype を使った記法で実装しなさい。
// 仕様

// 戦士は攻撃力 atk フィールドを持つ
// 戦士は攻撃 attack メソッドを持つ

// attack メソッドはそのインスタンスの atk の 2 倍の値をダメージとして返す
// 魔法戦士は戦士を継承する
// 魔法戦士は魔力 mgc フィールドを持つ
// 魔法戦士の attack は戦士としての attack の値にそのインスタンスの mgc の値を加算した値をダメージとして返す

export class soldier {
    atk: number;

    constructor(atk: number) {
        this.atk = atk;
    }

    attack() {
        return this.atk * 2;
    }
}

export class MagicSoldier extends soldier {
    mgc;

    constructor(atk: number, mgc: number) {
        super(atk);
        this.mgc = mgc;
    }

    attack() {
        return super.attack() + this.mgc;
    }
}


export function soldier2(this: { atk: number },atk: number) {
    this.atk = atk;
}

soldier2.prototype.attack = function () {
    return this.atk * 2;
};

export function MagicSoldier2(this: { atk: number; mgc: number },atk: number, mgc: number) {
    soldier2.call(this, atk); // 親クラスのコンストラクタを呼び出す
    this.mgc = mgc; // MagicSoldier2 独自のプロパティを追加
}

// 継承の設定
MagicSoldier2.prototype = Object.create(soldier2.prototype);
MagicSoldier2.prototype.constructor = MagicSoldier2;

// attack メソッドをオーバーライド
MagicSoldier2.prototype.attack = function () {
    return soldier2.prototype.attack.call(this) + this.mgc;
};