

// OrangeExtractorクラスは、オレンジジュースを抽出する具体的な実装
class OrangeExtractor {
    extract() {
        return "オレンジジュースを抽出しました";
    }
}

// AppleExtractorクラスは、リンゴジュースを抽出する具体的な実装
class AppleExtractor {
    extract() {
        return "リンゴジュースを抽出しました";
    }
}

// 依存性逆転の原則に基づき、JuiceMachineは具体的な実装（OrangeExtractorやAppleExtractor）に依存せず、
// 抽象的なインターフェース（extract()メソッドを持つもの）に依存する。
// これにより、JuiceMachineは柔軟性と拡張性を持つ設計となる。
class JuiceMachine {
    constructor(extractor) {
        this.extractor = extractor; // 抽象的な「extract()を持つもの」に依存
    }

    makeJuice() {
        const juice = this.extractor.extract();
        console.log(juice);
    }
}

// OrangeExtractorを使用してJuiceMachineを動作させる
const orangeMachine = new JuiceMachine(new OrangeExtractor());
orangeMachine.makeJuice(); // → オレンジジュースを抽出しました

// AppleExtractorを使用してJuiceMachineを動作させる
const appleMachine = new JuiceMachine(new AppleExtractor());
appleMachine.makeJuice();  // → リンゴジュースを抽出しました