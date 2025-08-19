// 以下の仕様を持つ、 retryWithExponentialBackof 関数を実装しなさい

// function retryWithExponentialBackoff(func, maxRetry, callback)



// 受け取った関数 func を呼び出し、func が true を返せばそこで終了する

// func が false を返した場合は以下の待ち時間後に func 呼び出しをリトライする
// 待ち時間はfuncの呼び出し回数に応じて 1 秒, 2 秒, 4 秒, ...と 2 倍に増えていく

// maxRetry 回リトライしても成功しない場合はそこで終了する

// retryWithExponentialBackoffに対する呼び出しは即座に完了し、func の呼び出しは非同期に行われる

// func が true を返す、または maxRetry 回のリトライが失敗し終了する際、その結果(true/false)を引数として関数 callback が呼び出される

export function retryWithExponentialBackoff(func, maxRetry, callback) {
    let attempt = 0;

    const tryFunc = () => {
        const result = func();
        if (result || attempt >= maxRetry) {
            callback(result);
            return;
        }

        attempt++;
        const delay = Math.pow(2, attempt) * 1000; // 待ち時間を計算 (1秒, 2秒, 4秒, ...)

        setTimeout(tryFunc, delay); // 指定した時間後に再試行
    };

    tryFunc(); // 初回の関数呼び出し
}
// 使用例
retryWithExponentialBackoff(
    () => Math.random() < 0.1, // 50%の確率でtrueを返す関数
    2, // 最大5回リトライ
    (result) => console.log(`最終結果: ${result}`) // 結果をログに出力
);
