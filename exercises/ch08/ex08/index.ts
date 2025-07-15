// 文中の counter をグループ化したクロージャを持つ関数 counterGroup を実装しなさい。
// 具体的には counterGroup は以下のメソッドを持つオブジェクトを返却しなさい。

// counterGroup#newCounter(): 文中の count と reset 同等の機能を持つ counter オブジェクトを返却する
// counterGroup#total(): これまで返却された counter が保持しているカウントの合計を返却する
// counterGroup#average(): これまで返却された counter が保持しているカウントの平均を返却する。counterGroup に属する counter が 1 つ以上存在していない場合 TypeError をスローする
// counterGroup#variance(): これまで返却された counter が保持しているカウントの分散を返却する。counterGroup に属する counter が 2 つ以上存在していない場合 TypeError をスローする

export function counterGroup() {
    let total: number = 0;
    let countPieces: number = 0;
    const countArray: { count: number }[] = [];
    return {
        newCounter: () => {
            const counterObj = { count: 0 };
            countPieces++;
            countArray.push(counterObj);
            return {
                count: () => {
                    total ++;
                    return counterObj.count++; // 現在のカウントを返す
                },
                reset: () =>{
                    total -= counterObj.count; // totalから現在のcountを引く
                    counterObj.count = 0; // countをリセット
                }
            };
        },
        total: () => {
            return total;
        },
        average: function (): number {
            if (countPieces === 0) {
                throw new TypeError("No counters available");
            }
            return total / countPieces;
        },
        variance: function () {
            let result: number = 0;
            if (countPieces < 2) {
                throw new TypeError("At least two counters are required for variance");
            }
            const countAverage :number = this.average();
            console.log(countAverage); // 1.5
            for (const counter of countArray) {
                console.log("count" + counter.count + "countAverage" + countAverage + "countPieces" + countPieces); // 1.
                result += Math.pow(counter.count - countAverage, 2)/countPieces;
            }
            return result;
        }
    }
}
