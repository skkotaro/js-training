export function reverse(str: string) {
  // Intl.Segmenterを使用して文字列をセグメント化
  const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
  const segments = [...segmenter.segment(str)];
    // セグメントを逆順に並べ替え
    const reversedSegments = segments.reverse();
    // 逆順セグメントのsegmentのみ抽出して文字列に変換
    return reversedSegments.map(segment => segment.segment).join('');

}
