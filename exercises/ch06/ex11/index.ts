// 極座標 r と theta をプロパティにもち、ゲッターとセッターをもつ読み書き可のアクセサプロパティとしてデカルト座標 x と y をもつオブジェクトを実装しなさい。
// セッターメソッドにおいて x と y それぞれに NaN が設定される場合にはエラーにしなさい。

export let polar = {
    r: 0,
    theta: 0,
    get x() {
        return this.r * Math.cos(this.theta);
    },
    set x(value) {
        if (isNaN(value)) {
            throw new Error("x must not be NaN");
        }
        const y = this.r * Math.sin(this.theta);
        this.r = Math.sqrt(value * value + y * y);
        this.theta = Math.atan2(y, value);
    },
    get y() {
        return this.r * Math.sin(this.theta);
    },
    set y(value) {
        if (isNaN(value)) {
            throw new Error("y must not be NaN");
        }
        const x = this.r * Math.cos(this.theta);
        this.r = Math.sqrt(x * x + value * value);
        this.theta = Math.atan2(value, x);
    }
}