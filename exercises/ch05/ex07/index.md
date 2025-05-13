### 予想

tryブロックでは、trueを返すようになっているが、その後のfinallyブロックでfalseに上書きされるのでfunctionからreturnされるものがfalseになる

```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());

```
