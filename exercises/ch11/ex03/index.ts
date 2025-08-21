
export function fromLittleToBigEndian(data: Uint32Array): Uint32Array {
  // データが空の場合は空のUint32Arrayを返す
  if (data.length === 0) {
    return new Uint32Array();
  }

  // 新しいバッファを作成（同じバイト長）
  const newBuffer = new ArrayBuffer(data.byteLength);
  // 入力データ用のDataViewを作成
  const inputDataView = new DataView(data.buffer);
  // 出力データ用のDataViewを作成
  const outputDataView = new DataView(newBuffer);

  // 各要素ごとにリトルエンディアン→ビッグエンディアン変換
  for (let i = 0; i < data.length; i++) {
    const byteOffset = i * 4; // 4バイトごとに処理
    const littleEndianValue = inputDataView.getUint32(byteOffset, true); // リトルエンディアンで値を取得
    outputDataView.setUint32(byteOffset, littleEndianValue, false); // ビッグエンディアンで値を書き込む
  }

  // 変換後のUint32Arrayを返す
  return new Uint32Array(newBuffer);
}

export function fromBigToLittleEndian(data: Uint32Array): Uint32Array {
  // データが空の場合は空のUint32Arrayを返す
  if (data.length === 0) {
    return new Uint32Array();
  }

  // 新しいバッファを作成（同じバイト長）
  const newBuffer = new ArrayBuffer(data.byteLength);
  // 入力データ用のDataViewを作成
  const inputDataView = new DataView(data.buffer);
  // 出力データ用のDataViewを作成
  const outputDataView = new DataView(newBuffer);

  // 各要素ごとにビッグエンディアン→リトルエンディアン変換
  for (let i = 0; i < data.length; i++) {
    const byteOffset = i * 4; // 4バイトごとに処理
    const bigEndianValue = inputDataView.getUint32(byteOffset, false); // ビッグエンディアンで値を取得
    outputDataView.setUint32(byteOffset, bigEndianValue, true); // リトルエンディアンで値を書き込む
  }

  // 変換後のUint32Arrayを返す
  return new Uint32Array(newBuffer);
}