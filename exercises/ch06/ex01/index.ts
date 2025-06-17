export type LinkList  = {
    key: string,
    value: string | object,
    next: LinkList | null,
    };
export function newHashTable(capacity: number) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列
    get(key: string) {
      // keyにマップされた値を取得する
      const index = hash(key, capacity);
      let node = this.entries[index];
      while (node) {
        if (node.key === key) {
          return node.value;
        }
        node = node.next;
      }
      return undefined;
    },
    put(key: string, value: string | object) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const index = hash(key, capacity);
      let node = this.entries[index];
      let prev = null;

      while (node) {
        if (node.key === key) {
          node.value = value;
          return;
        }
        prev = node;
        node = node.next;
      }

      const newNode: LinkList = { key, value, next: null };
      if (prev === null) {
        this.entries[index] = newNode;
      } else {
        //末尾に引数の値を追加する
        //nodeはnullになってしまったので参照が切れてしまう
        prev.next = newNode;
      }
      this.size++;
    },
    remove(key: string) {
      // keyのマッピングを削除する
      const index = hash(key, capacity);
      let node = this.entries[index];
      let prev = null;
      while (node) {
        if (node.key === key) {
          if (prev === null) {
            this.entries[index] = node.next;
          } else {
            prev.next = node.next;
          }
          this.size--;
          return;
        }
        prev = node;
        node = node.next;
      }
    },
  };
}



export function hash(key: string, capacity: number): number {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
    hashValue += key.charCodeAt(i); // 各文字のUnicode値を加算
  }
  return hashValue % capacity; // 配列のサイズで剰余を取る
}
sample();
export function sample() {
  const hashTable = newHashTable(10);
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1
}
console.log(hash1)