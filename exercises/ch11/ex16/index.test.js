// 以下の仕様を持つ、 retryWithExponentialBackof 関数を実装しなさい

// function retryWithExponentialBackoff(func, maxRetry, callback)



// 受け取った関数 func を呼び出し、func が true を返せばそこで終了する

// func が false を返した場合は以下の待ち時間後に func 呼び出しをリトライする
// 待ち時間はfuncの呼び出し回数に応じて 1 秒, 2 秒, 4 秒, ...と 2 倍に増えていく

// maxRetry 回リトライしても成功しない場合はそこで終了する

// retryWithExponentialBackoffに対する呼び出しは即座に完了し、func の呼び出しは非同期に行われる

// func が true を返す、または maxRetry 回のリトライが失敗し終了する際、その結果(true/false)を引数として関数 callback が呼び出される
import { retryWithExponentialBackoff } from "./index.js";

// シンプルなassert関数
function assertEqual(actual, expected, message) {
  if (actual === expected) {
    console.log(`✓ ${message}`);
  } else {
    console.error(`✗ ${message} (expected: ${expected}, actual: ${actual})`);
  }
}

// 1. funcが最初にtrueを返したらcallback(true)
let called1 = 0;
retryWithExponentialBackoff(
  () => { called1++; return true; },
  3,
  (result) => {
    assertEqual(result, true, "funcが最初にtrueでcallback(true)");
    assertEqual(called1, 1, "funcは1回だけ呼ばれる");
  }
);

// 2. funcがfalseを返し続け、maxRetry回リトライ後にcallback(false)
let called2 = 0;
retryWithExponentialBackoff(
  () => { called2++; return false; },
  2,
  (result) => {
    assertEqual(result, false, "funcがfalseを返し続けたらcallback(false)");
    assertEqual(called2, 3, "funcは初回+2回リトライで3回呼ばれる");
  }
);

// 3. funcが途中でtrueを返したら、その時点でcallback(true)
let called3 = 0;
retryWithExponentialBackoff(
  () => { called3++; return called3 === 3; },
  5,
  (result) => {
    assertEqual(result, true, "funcが途中でtrueを返したらcallback(true)");
    assertEqual(called3, 3, "funcは3回目でtrueになる");
  }
);

// 4. retryWithExponentialBackoffの呼び出し自体は即座に完了する
const before = Date.now();
retryWithExponentialBackoff(() => false, 1, () => {});
const after = Date.now();
assertEqual(after - before < 10, true, "呼び出し自体は即座に完了する");

// 非同期テストのために十分待つ
setTimeout(() => {
  console.log("全テスト終了");
}, 8000);