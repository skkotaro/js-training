export function counterGroup() {
    // 全カウンターの合計値を保持する変数
    let total: number = 0;

    // カウンターの数を保持する変数
    let countPieces: number = 0;

    // 各カウンターの状態を保持する配列
    const countArray: { count: number }[] = [];

    return {
        // 新しいカウンターを作成するメソッド
        newCounter: () => {
            // 新しいカウンターオブジェクトを初期化
            const counterObj = { count: 0 };

            // カウンターの数をインクリメント
            countPieces++;

            // 新しいカウンターを配列に追加
            countArray.push(counterObj);

            return {
                // カウンターの値をインクリメントし、その値を返すメソッド
                count: () => {
                    total++; // 全体の合計値をインクリメント
                    return counterObj.count++; // 現在のカウントを返し、次回のためにインクリメント
                },
                // カウンターをリセットするメソッド
                reset: () => {
                    total -= counterObj.count; // 全体の合計値からこのカウンターの値を引く
                    counterObj.count = 0; // カウンターの値をリセット
                }
            };
        },
        // 全カウンターの合計値を返すメソッド
        total: () => {
            return total;
        },
        // 全カウンターの平均値を計算して返すメソッド
        average: function (): number {
            if (countPieces === 0) {
                // カウンターが1つも存在しない場合はエラーをスロー
                throw new TypeError("No counters available");
            }
            return total / countPieces; // 合計値をカウンターの数で割る
        },
        // 全カウンターの分散を計算して返すメソッド
        variance: function () {
            let result: number = 0;

            if (countPieces < 2) {
                // カウンターが2つ未満の場合はエラーをスロー
                throw new TypeError("At least two counters are required for variance");
            }

            // 平均値を計算
            const countAverage: number = this.average();

            // 各カウンターの値と平均値との差の2乗を計算し、分散を求める
            for (const counter of countArray) {
                result += Math.pow(counter.count - countAverage, 2) / countPieces;
            }

            return result; // 分散を返す
        }
    };
}