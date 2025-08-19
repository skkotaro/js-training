// 引数として与えられる 符号なし 32 ビット整数の配列(Uint32Array) を受け取り、変換して符号なし 32 ビット整数の配列(Uint32Array) を返す次の二つの関数を実装しなさい。

// リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
// ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数

export function fromLittleToBigEndian(data: Uint32Array): Uint32Array {
  if (data.length === 0) {
    return new Uint32Array();
  }

  const newBuffer = new ArrayBuffer(data.byteLength);
  const inputDataView = new DataView(data.buffer);
  const outputDataView = new DataView(newBuffer);

  for (let i = 0; i < data.length; i++) {
    const byteOffset = i * 4;
    const littleEndianValue = inputDataView.getUint32(byteOffset, true);
    outputDataView.setUint32(byteOffset, littleEndianValue, false);
  }

  return new Uint32Array(newBuffer);
}

export function fromBigToLittleEndian(data: Uint32Array): Uint32Array {
  if (data.length === 0) {
    return new Uint32Array();
  }

  const newBuffer = new ArrayBuffer(data.byteLength);
  const inputDataView = new DataView(data.buffer);
  const outputDataView = new DataView(newBuffer);

  for (let i = 0; i < data.length; i++) {
    const byteOffset = i * 4;
    const bigEndianValue = inputDataView.getUint32(byteOffset, false);
    outputDataView.setUint32(byteOffset, bigEndianValue, true);
  }

  return new Uint32Array(newBuffer);
}