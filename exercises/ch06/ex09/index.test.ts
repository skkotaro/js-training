//以下のコードの // ここに１行のコードを書く の部分に１行だけコードを書いて、最後のマッチャーに成功するようなテストを作成しなさい。const mock = jest.fn();
import { jest } from "@jest/globals";
const mock = jest.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く

(obj as any).toJSON = function () {
 return { x: this.x, y: this.y, sum: this.sum() };
};


obj.x = 1;
obj.y = 2;
it("以下のコードの // ここに１行のコードを書く の部分に１行だけコードを書いて、最後のマッチャーに成功するようなテストを作成できたかどうか", () => {
expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
expect(mock).toHaveBeenCalled();
});