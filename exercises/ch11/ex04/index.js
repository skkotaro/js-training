// これから (N, K) と (K, M) の行列の乗算を行う (この値は色々変更して試すこと)
const [N, K, M] = [500, 5, 5];

// 配列版: (N, K) の行列を要素数 N * K の1次元配列で表現する ((i, j) は array[K * i + j] で参照)
const lhsA = Array(N * K)
  .fill(0.0)
  .map(() => Math.random());
const rhsA = Array(K * M)
  .fill(0.0)
  .map(() => Math.random());
const resultA = Array(N * M).fill(0.0);

function arrayMultiply() {
  resultA.fill(0.0); // 結果配列を0で初期化
  // lhsAとrhsAの行列積を計算し、resultAに格納
  //行と列ごとにループを回して、積和計算を行う
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      let sum = 0.0; // 要素ごとの合計値
      for (let k = 0; k < K; ++k) { // 積和計算ループ
        sum += lhsA[i * K + k] * rhsA[k * M + j]; // 対応する要素の積を加算
      }
      resultA[i * M + j] = sum; // 計算結果を格納
    }
  }
  return resultA; // 結果配列を返す
}

// 型付き配列版 (Float64Array 以外の型も試してみると良い)
const lhsB = new Float64Array(N * K).fill(0.0).map((_, i) => lhsA[i]);
const rhsB = new Float64Array(K * M).fill(0.0).map((_, i) => rhsA[i]);
const resultB = new Float64Array(N * M).fill(0.0);

function typedArrayMultiply() {
  resultB.fill(0.0);
  // 問題: ここで resultB に lhsB と rhsB の乗算結果を格納してね

  // lhsBとrhsBの行列積を計算し、resultBに格納
  //行と列ごとにループを回して、積和計算を行う
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      let sum = 0.0; // 要素ごとの合計値
      for (let k = 0; k < K; ++k) { // 積和計算ループ
        sum += lhsB[i * K + k] * rhsB[k * M + j]; // 対応する要素の積を加算
      }
      resultB[i * M + j] = sum; // 計算結果を格納
    }
  }

  return resultB;
}

const TEST_TIMES = 100;
const TESTS = [arrayMultiply, typedArrayMultiply];
function test(fn) {
  let result;
  for (let i = 0; i < TEST_TIMES; ++i) {
    result = fn();
  }
  return result;
}

// warmup
for (let i = 0; i < TESTS.length; ++i) {
  test(TESTS[i]);
}

// 測定開始
for (let i = 0; i < TESTS.length; ++i) {
  const start = performance.now();
  test(TESTS[i]);
  const end = performance.now();
  console.log(`${TESTS[i].name}: ${end - start}`);
}

// 予想
// 型付き配列の方が早い

// 結果

// [5, 5, 5]
// arrayMultiply: 0.09908300000000736
// typedArrayMultiply: 0.0720839999999896

// [500, 5, 5]
// arrayMultiply: 1.7636249999999905
// typedArrayMultiply: 1.5203330000000221

// [5, 500, 5]
// arrayMultiply: 1.1731670000000065
// typedArrayMultiply: 1.2088750000000061

// [5, 5, 500]
// arrayMultiply: 1.725875000000002
// typedArrayMultiply: 1.7612080000000105

// [500, 500, 5]
// arrayMultiply: 299.896834
// typedArrayMultiply: 127.15204200000005

// [500, 5, 500]
// arrayMultiply: 154.69504099999995
// typedArrayMultiply: 153.13854100000003

// [5, 500, 500]
// arrayMultiply: 162.70266600000002
// typedArrayMultiply: 139.29279099999997

// [500, 500, 500]
// arrayMultiply: 12393.204666000001
// typedArrayMultiply: 14181.596540999999

// [N, K, M]の全てが少ない形や、NやMが少ない形では、型付き配列の方が速い傾向がある。
// また、一つだけ少ない場合は、型付き配列の方が速い傾向がある。
// ただし、N, K, Mが全て大きい場合は、型付き配列が遅くなる傾向がある。