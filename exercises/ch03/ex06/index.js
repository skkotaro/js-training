export function slice(str, indexStart, indexEnd) {
  // TODO: ここを実装しなさい
  let result = "";
  if (indexStart  === undefined) {
    indexStart = 0;
  } else if (isNaN(indexStart)) {
    indexStart = 0;
  } else if (indexStart > str.length) {
    indexStart = str.length;
  } else if (indexStart < -str.length) {
    indexStart = -str.length;
  }

  if (indexEnd  === undefined) {
    indexEnd = str.length;
  } else if (isNaN(indexEnd)) {
    indexEnd = 0;
  } else if (indexEnd > str.length) {
    indexEnd = str.length;
  } else if (indexEnd < -str.length) {
    indexEnd = -str.length;
  }

  if (indexStart < 0) {
    indexStart = str.length + indexStart;
  }
  if (indexEnd < 0) {
    indexEnd = str.length + indexEnd;
  }

  if (indexEnd < indexStart) {
    indexEnd = 0;
    indexStart = 0;
  }

  indexStart  = Math.trunc(indexStart);
  indexEnd  = Math.trunc(indexEnd);

  for (let i = indexStart; i < indexEnd; i++) {
    result += str[i];
  }
  return result;
}
