export function bitCount(bit: number): number {
    let count : number = 0;
    // 32の補数表現で負の数を処理するために、ビットを32bitに変換する
    let bit32: number = bit >>> 0;
    //bit.toString(2).lengthはビット数を取得する
    console.log(bit32.toString(2));
    for (let i = 0; i < 32; i++) {
        //一桁ずつビットを調べる (下記は0b1010の例)
        //1010 & 0001 = 0000 false
        //1010 & 0010 = 0010 true
        //1010 & 0100 = 0000 false
        //1010 & 1000 = 1000 true
        // trueの時はカウントを増やす
        if ((bit32 & (1 << i)) !== 0) {
            count++;
        }
    }
    return count;
  }

  console.log(bitCount(-2));