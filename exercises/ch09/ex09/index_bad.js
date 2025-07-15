class OrangeExtractor {
  extract() {
    return "オレンジジュースを抽出しました";
  }
}

class JuiceMachine {
  constructor() {
    // 具体的な実装の基づいてしまっている
    this.extractor = new OrangeExtractor();
  }

  makeJuice() {
    //抽象的なインターフェースに依存していないので、具体的なメソッドを直接読んでいる
    const juice = this.extractor.extract();
    console.log(juice);
  }
}

// 使用例
const machine = new JuiceMachine();
machine.makeJuice(); // → オレンジジュースを抽出しました
