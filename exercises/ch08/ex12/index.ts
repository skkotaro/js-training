// プログラミング言語によっては無名関数の引数名を省略し、短く書けるものがある。
// 例えば以下のような処理の場合、 (a, b) => a + b 相当の無名関数を、 Swift では { $0 + $1 } 、 Elixir では &(&1 + &2) のように書ける。

// console.log(arr.reduce((a, b) => a + b, 0));
// console.log(arr.sort((a, b) => a - b));


// JavaScript で同様の書き方ができるよう、 Function コンストラクタを用いて以下のコードが動作するような 関数 f を作成しなさい。

// console.log(arr.reduce(f("$1 + $2"), 0));
// console.log(arr.sort(f("$1 - $2")));




// f は引数に関数の本体を文字列として受け取る
// 関数の本体で使用する引数は $1, $2, ... のように記載し、 $10 までサポートする
export const f = (contents: string) => {
    // 引数名として使用する文字列の配列を定義
    // $1, $2, ..., $10 までの引数をサポート
    const argArray = ["$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9", "$10"];

    // Function コンストラクタを使用して新しい関数を作成
    // - 引数リストとして argArray を展開
    // - 関数の本体として contents を使用
    // - contents に "return" が含まれていない場合、自動的に "return " を追加
    return new Function(
        ...argArray, 
        contents.includes("return") ? contents : `return ${contents}`
    );
};