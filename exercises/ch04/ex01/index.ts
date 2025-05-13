//複素数のオブジェクトのプロパティを定義した
interface Complex {
    re: number;
    im: number;
}

// (a+bi)+(c+di) = (a+c) + (b+d)i
let add = function (com1: Complex, com2: Complex): Complex {
  return {
    re: com1.re + com2.re,
    im: com1.im + com2.im,
  };
}

// (a+bi)-(c+di) = (a-c) + (b-d)i
let sub = function (com1: Complex, com2: Complex): Complex {
    return {
      re: com1.re - com2.re,
      im: com1.im - com2.im,
    };
  }

// (a+bi)*(c+di) = (ac-bd) + (ad+bc)i
let mul = function (com1: Complex, com2: Complex): Complex {
    return {
        re: com1.re * com2.re - com1.im * com2.im,
        im: com1.re * com2.im + com1.im * com2.re,
    };
}

// (a+bi)/(c+di) = ((ac+bd)/(c^2+d^2)) + ((bc-ad)/(c^2+d^2))i
let div = function (com1: Complex, com2: Complex): Complex {
    return {
        re: (com1.re * com2.re + com1.im * com2.im) / (com2.re * com2.re + com2.im * com2.im),
        im: (com1.im * com2.re - com1.re * com2.im) / (com2.re * com2.re + com2.im * com2.im),
    };
}
