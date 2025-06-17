console.log("𠮷野家"[0])
console.log("👨‍👨‍👧‍👧"[0])

const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
const segmentsYoshinoya = [...segmenter.segment("𠮷野家")];
const segmentsFamily = [...segmenter.segment("👨‍👨‍👧‍👧")];
console.log(segmentsYoshinoya[0].segment);
console.log(segmentsFamily[0].segment);