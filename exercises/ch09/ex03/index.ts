class PositiveNumber {
  constructor(value:number) {
    let x = value; // プライベート変数として定義して外からアクセスできないようにする
    if(value <= 0) {
      throw new Error("require : x > 0");
    }
    return {
      //プライベートな変数xを返す
      getX: function() {return x;},
      // プライベートな変数xを設定するメソッド
      // これ以外の方法ではxを変更できない
      setX: function(value:number) {
        if(value <= 0) {
          throw new Error("require : x > 0");
        }
        x = value; // プライベート変数を更新
      }
    };
  }
}
