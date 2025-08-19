
// オブジェクトを 1 つ引数に取り、何らかの時間のかかる計算を行い、与えられた引数に対して一意な結果を返す関数slowFnを考える。slowFnの計算結果をキャッシュし、同じ引数で繰り返し呼び出された時にはキャッシュを返す関数cachedSlowFnを生成する関数cacheを実装しなさい。ただしslowFnの引数のオブジェクトが到達不能になった場合には、キャッシュがガベージコレクションの対象になるように実装しなさい。またslowFnは任意の実装で良い。
// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // WeakMap を使用してキャッシュを作成
  const cache = new WeakMap();
  // 使用カウント用
  let cacheCount = 0;
  function returnCache (obj) {
    console.log("キャッシュ使用");
    cacheCount++;
    return cache.get(obj); // キャッシュが存在する場合はそれを返す
  }
  const cachedFunction = function (obj) {
    if (cache.has(obj)) {
      return returnCache(obj);
    }
    const result = f(obj);
    cache.set(obj, result);
    return result;
  };

  // cacheCount をプロパティとして追加
  cachedFunction.getCacheCount = () => cacheCount;

  return cachedFunction;
}

export function slowFn(obj) {
  // 時間のかかる処理（例: フィボナッチ数列の計算）
  const n = obj.number;
  if (n <= 1) return n;
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