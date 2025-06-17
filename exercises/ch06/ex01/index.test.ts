import { newHashTable} from "./index.ts";

describe("作成したハッシュテーブルのチェックテスト", () => {
  it("マッピングの追加と取得を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");
    hashTable.put("key3", "value3");

    expect(hashTable.size).toBe(3); // マッピング数が正しいか確認
    expect(hashTable.get("key1")).toBe("value1"); // key1に対応する値を取得
    expect(hashTable.get("key2")).toBe("value2"); // key2に対応する値を取得
    expect(hashTable.get("key3")).toBe("value3"); // key3に対応する値を取得
  });

  it("マッピングの上書きを確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key1", "newValue1"); // key1の値を上書き

    expect(hashTable.size).toBe(1); // マッピング数は変わらない
    expect(hashTable.get("key1")).toBe("newValue1"); // key1に対応する値が上書きされているか確認
  });

  it("マッピングの削除を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");

    hashTable.remove("key1"); // key1を削除

    expect(hashTable.size).toBe(1); // マッピング数が減少しているか確認
    expect(hashTable.get("key1")).toBeUndefined(); // key1が削除されているか確認
    expect(hashTable.get("key2")).toBe("value2"); // key2はそのまま
  });

  it("衝突時のリンクリスト形式を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");
    hashTable.put("key3", "value3"); // key2とkey3が同じインデックスに衝突

    const entry = hashTable.entries[1]; // インデックス1のエントリを確認
    expect(entry.key).toBe("key2");
  });
});