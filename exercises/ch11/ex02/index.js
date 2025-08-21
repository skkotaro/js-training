
// オブジェクトを 1 つ引数に取り、何らかの時間のかかる計算を行い、与えられた引数に対して一意な結果を返す関数slowFnを考える。slowFnの計算結果をキャッシュし、同じ引数で繰り返し呼び出された時にはキャッシュを返す関数cachedSlowFnを生成する関数cacheを実装しなさい。ただしslowFnの引数のオブジェクトが到達不能になった場合には、キャッシュがガベージコレクションの対象になるように実装しなさい。またslowFnは任意の実装で良い。
// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // オブジェクトをキーにしたキャッシュ用のWeakMapを作成
  const cache = new WeakMap();
  // キャッシュが使われた回数をカウントする変数
  let cacheCount = 0;
  // キャッシュから値を返す関数
  function returnCache (obj) {
    console.log("キャッシュ使用"); // キャッシュ利用時にログ出力
    cacheCount++; // キャッシュ利用回数をインクリメント
    return cache.get(obj); // キャッシュが存在する場合はそれを返す
  }
  // キャッシュ機能付きの関数を定義
  const cachedFunction = function (obj) {
    if (cache.has(obj)) { // キャッシュがあれば
      return returnCache(obj); // キャッシュを返す
    }
    const result = f(obj); // なければ計算を実行
    cache.set(obj, result); // 結果をキャッシュに保存
    return result; // 計算結果を返す
  };

  // cacheCount をプロパティとして追加（キャッシュ利用回数取得用）
  cachedFunction.getCacheCount = () => cacheCount;

  return cachedFunction; // キャッシュ機能付き関数を返す
}

export function slowFn(obj) {
  // 時間のかかる処理（例: フィボナッチ数列の計算）
  const n = obj.number; // オブジェクトのnumberプロパティを取得
  if (n <= 1) return n; // ベースケース: 0または1ならそのまま返す
  // 再帰的にフィボナッチ数列を計算
  return slowFn({ number: n - 1 }) + slowFn({ number: n - 2 });
}

// cachedSlowFn を同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);

const obj1 = { number: 10 };
const obj2 = { number: 5 };

console.log(cachedSlowFn(obj1)); // 初回は計算が行われる
console.log(cachedSlowFn(obj1)); // 2回目はキャッシュが返る
console.log(cachedSlowFn(obj2)); // 初回は計算が行われる
console.log(cachedSlowFn(obj2)); // 2回目はキャッシュが返る