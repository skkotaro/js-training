// instanceofと等価な関数 instanceOf(object, constructor)を作成しなさい。
// 関数内部での instanceof の利用は不可。
// 作成した関数に対してテストを作成しなさい。
// テストケースには少なくとも以下を含むこと。

// 多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
// 継承関係にないインスタンスとクラスのコンストラクタを入力するケース
export function instanceOf(object: any, constructor: Function): boolean {
    // オブジェクトのプロトタイプチェーンをたどって、コンストラクタのプロトタイプと一致するか確認
    while (object !== null) {
        if (Object.getPrototypeOf(object) === constructor.prototype) {
            return true;
        }
        object = Object.getPrototypeOf(object); // 次のプロトタイプをたどる
    }
    return false;
}