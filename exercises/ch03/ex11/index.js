const obj1 = {x: 1};
// 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
obj1.y = 2;
console.log(obj1);

const obj2 = {x: 1, y: 2};
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい: false
console.log(obj1 === obj2);

export function equals(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
      return false;
    }

    if (obj1 === null && obj2 === null) {
      return true;
    }
    if (obj1 === null || obj2 === null) {
      return false;
    }

    if (typeof obj1 !== 'object') {
      return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }

      if (!equals(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }