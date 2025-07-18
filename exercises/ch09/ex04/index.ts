// 以下の仕様に基づいて RPG の戦士クラスと魔力を持った戦士である魔法戦士クラスをそれぞれ class を使った記法と prototype を使った記法で実装しなさい。
// 仕様

// 戦士は攻撃力 atk フィールドを持つ
// 戦士は攻撃 attack メソッドを持つ

// attack メソッドはそのインスタンスの atk の 2 倍の値をダメージとして返す
// 魔法戦士は戦士を継承する
// 魔法戦士は魔力 mgc フィールドを持つ
// 魔法戦士の attack は戦士としての attack の値にそのインスタンスの mgc の値を加算した値をダメージとして返す

// 戦士クラス（class を使用した実装）
export class soldier {
    atk: number; // 攻撃力を表すフィールド

    constructor(atk: number) {
        // コンストラクタ: 攻撃力を初期化
        this.atk = atk;
    }

    attack() {
        // attack メソッド: 攻撃力の2倍を返す
        return this.atk * 2;
    }
}

// 魔法戦士クラス（class を使用した実装）
export class MagicSoldier extends soldier {
    mgc; // 魔力を表すフィールド

    constructor(atk: number, mgc: number) {
        // 親クラス（soldier）のコンストラクタを呼び出し、攻撃力を初期化
        super(atk);
        this.mgc = mgc; // 魔力を初期化
    }

    attack() {
        // attack メソッド: 親クラスの attack メソッドの結果に魔力を加算して返す
        return super.attack() + this.mgc;
    }
}

// 戦士クラス（prototype を使用した実装）
export function soldier2(this: { atk: number }, atk: number) {
    // コンストラクタ: 攻撃力を初期化
    this.atk = atk;
}

// attack メソッド: 攻撃力の2倍を返す
soldier2.prototype.attack = function () {
    return this.atk * 2;
};

// 魔法戦士クラス（prototype を使用した実装）
export function MagicSoldier2(this: { atk: number; mgc: number }, atk: number, mgc: number) {
    // 親クラス（soldier2）のコンストラクタを呼び出し、攻撃力を初期化
    soldier2.call(this, atk);
    this.mgc = mgc; // 魔力を初期化
}

// 継承の設定: MagicSoldier2 が soldier2 を継承するように設定
MagicSoldier2.prototype = Object.create(soldier2.prototype);
MagicSoldier2.prototype.constructor = MagicSoldier2;

// attack メソッドをオーバーライド
MagicSoldier2.prototype.attack = function () {
    // 親クラスの attack メソッドの結果に魔力を加算して返す
    return soldier2.prototype.attack.call(this) + this.mgc;
};