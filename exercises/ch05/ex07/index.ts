function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

// finallyは必ず実行されるのでreturnされるものがfalseに上書きされる
console.log(f());
