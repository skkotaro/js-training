import { TypedMap, TypedMapComposition } from './index.js';

// ヘルパー関数: インスタンスが Map の場合は直接 get() を、そうでなければ内部の map から取得
function getValue(impl, key) {
  return impl instanceof Map ? impl.get(key) : impl.map.get(key);
}

describe('TypedMap と TypedMapComposition の等価性テスト', () => {
  it('コンストラクタで初期化されたエントリが等しく設定される', () => {
    const tm1 = new TypedMap('string', 'number', [['a', 1], ['b', 2]]);
    const tm2 = new TypedMapComposition('string', 'number', [['a', 1], ['b', 2]]);
    expect(getValue(tm1, 'a')).toBe(getValue(tm2, 'a'));
    expect(getValue(tm1, 'b')).toBe(getValue(tm2, 'b'));
  });

  it('set() メソッドで正しい型のエントリが追加される動作が等しい', () => {
    const tm1 = new TypedMap('string', 'number');
    const tm2 = new TypedMapComposition('string', 'number');
    tm1.set('c', 3);
    tm2.set('c', 3);
    expect(getValue(tm1, 'c')).toBe(getValue(tm2, 'c'));
  });

  it('コンストラクタで不正な型のエントリを渡すと同じエラーがスローされる', () => {
    expect(() => new TypedMap('string', 'number', [['x', 'y']])).toThrow(TypeError);
    expect(() => new TypedMapComposition('string', 'number', [['x', 'y']])).toThrow(TypeError);
  });

  it('set() メソッドで不正な型のキーを渡すと同じエラーがスローされる', () => {
    const tm1 = new TypedMap('string', 'number');
    const tm2 = new TypedMapComposition('string', 'number');
    expect(() => tm1.set(123, 3)).toThrow(TypeError);
    expect(() => tm2.set(123, 3)).toThrow(TypeError);
  });

  it('set() メソッドで不正な型の値を渡すと同じエラーがスローされる', () => {
    const tm1 = new TypedMap('string', 'number');
    const tm2 = new TypedMapComposition('string', 'number');
    expect(() => tm1.set('d', 'wrong')).toThrow(TypeError);
    expect(() => tm2.set('d', 'wrong')).toThrow(TypeError);
  });
});