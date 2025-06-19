import { newHashTable } from "./index.ts";

describe("作成したハッシュテーブルのチェックテスト", () => {
  it("マッピングの追加と取得を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");
    hashTable.put("key3", "value3");

    expect(hashTable.size).toBe(3);
    expect(hashTable.get("key1")).toBe("value1");
    expect(hashTable.get("key2")).toBe("value2");
    expect(hashTable.get("key3")).toBe("value3");
  });

  it("マッピングの上書きを確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key1", "newValue1");

    expect(hashTable.size).toBe(1);
    expect(hashTable.get("key1")).toBe("newValue1");
  });

  it("マッピングの削除を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");

    hashTable.remove("key1");

    expect(hashTable.size).toBe(1);
    expect(hashTable.get("key1")).toBeUndefined();
    expect(hashTable.get("key2")).toBe("value2");
  });

  it("衝突時のリンクリスト形式を確認", () => {
    const hashTable = newHashTable(3);

    hashTable.put("key1", "value1");
    hashTable.put("key2", "value2");
    hashTable.put("key3", "value3");

    const entry = hashTable.entries[1];
    expect(entry.key).toBe("key2");
  });
});