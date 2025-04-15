export function substring(str, indexStart, indexEnd) {
  // TODO: ここを実装しなさい
  let result = "";
  if (indexStart  === undefined) {
    indexStart = str.length;
  } else if (indexStart < 0 || isNaN(indexStart)) {
    indexStart = 0;
  } else if (indexStart > str.length) {
    indexStart = str.length;
  }

  if (indexEnd  === undefined) {
    indexEnd = str.length;
  } else if (indexEnd < 0 || isNaN(indexEnd)) {
    indexEnd = 0;
  } else if (indexEnd > str.length) {
    indexEnd = str.length;
  } else if (indexEnd < -str.length) {
    indexEnd = -str.length;
  }

  if (indexEnd < indexStart) {
    const temp = indexStart;
    indexStart = indexEnd;
    indexEnd = temp;
  }

  indexStart  = Math.trunc(indexStart);
  indexEnd  = Math.trunc(indexEnd);

  for (let i = indexStart; i < indexEnd; i++) {
    result += str[i];
  }
  return result;
}

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

export function padStart(str, targetLength, padString) {
  // TODO: ここを実装しなさい
  padString = padString || " ";
  if (str.length  <= targetLength) {
    for (let i = targetLength - str.length; i > 0 ; i--) {
      str = padString[(i-1) % padString.length] + str;
    }
  }

  return str;
}

export function trim(str) {
  // TODO: ここを実装しなさい
  let i = 0;
  let j = 0;
  let strTrim = str;
  while (str[i] === " ") {
    i++;
  }
  while (strTrim[str.length - (j + 1)] === " ") {
    j++;
  }
  console.log(j);
  strTrim = slice(strTrim, i , str.length - j);
  return strTrim;
}