//引数が複数なのでアロー関数の引数は括弧で囲む必要がある。
// アロー関数のブロック内で複数の処理を行う場合は中括弧が必要。
export const roopLog = (n :number,c: string): string[] => {
    if (n < 0) {
        throw new Error("n must be a non-negative integer");
    }
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        console.log(c);
    }
    return result.fill(c);
}

//引数が一つなのでアロー関数の引数は括弧で囲む必要はない。
//型定義をする場合は引数に括弧が必要だった。
//簡単なreturn文のみなのでアロー関数ののブロックの中括弧は省略可能。
export const square = (n:number): number => n * n;
//export const square2 = n => n * n; // 型定義なし

// return文だけなのでアロー関数のブロックの中括弧は省略可能。オブジェクトを表す中括弧は必要。
//returnがオブジェクトを返す場合は、オブジェクトを括弧で囲む必要がある。
export const currentTime = (): object => ({now: new Date()});
