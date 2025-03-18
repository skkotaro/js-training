export function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n <= 2) {
    return 1;
  }

  let previous = 1;
  let currrent = 2;
  let keep;
  for (let i = 3; i < n; i++) {
    keep = currrent;
    currrent += previous;
    previous = keep;
  }

  return currrent;
}
