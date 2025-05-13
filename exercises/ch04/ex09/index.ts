// typeof 演算子のオペランドに、undefined, null, オブジェクト, NaN, 数値, 関数 を指定したときの返り値を予想しなさい。
//その後実装しコンソール出力で確認しなさい。
console.log(typeof(undefined)); // undefined
console.log(typeof(null)); // object
console.log(typeof({})); // object
console.log(typeof(NaN)); // number
console.log(typeof(10)); // number
console.log(typeof(() => {})); // function