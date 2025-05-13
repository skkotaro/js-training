### 予想

ループに入り、tryブロックでエラーをスローしたのでcatchブロックに入り、breakが呼ばれるがfinallyブロックでcontinueが呼ばれるためループから抜けずに最後まで実行し5が出力される

```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);

```
