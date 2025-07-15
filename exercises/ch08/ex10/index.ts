// 関数を引数に受け取り、 call 相当の動きをするプロパティ myCall を追加する関数 addMyCall(f)を実装しなさい。実装には bind を使い call や apply は使わないこと
export function addMyCall(f:(...args: any[]) => any): void {
    //呼ばれたらmyCallに引数の関数を追加する
    (f as any).myCall = function (thisArg:any, ...args: any[]): any {
        //thisを入れる第一引数をバインドする
        const callFunc = f.bind(thisArg);
        //バインドした関数を呼び出す
        return callFunc(...args);
    };
}