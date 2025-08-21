import { statSync } from "fs";
// テキストでは独自のエラーとして ParseError や HTTPError クラスの例がありました。自分でも独自のエラーを実装しなさい。
// エラーの例が思いつかない場合には、ファイルのパスを引数に受けとる関数で、ファイルのサイズが許容サイズをオーバーしている場合に投げるエラーを実装しなさい。
// ファイルサイズが大きすぎる場合に投げる独自エラー
class FileSizeError extends Error {
    // ファイルパスを受け取り、エラーメッセージを設定
    constructor(filePath: string) {
        super(`ファイルサイズが最大を超えています: ${filePath}`);
        this.name = "FileSizeError"; // エラー名を設定
    }
}

// ファイルサイズをチェックし、50MBを超えていればエラーを投げる関数
function checkFileSize(filePath: string) {
    const fileSizeBytes = statSync(filePath).size; // ファイルサイズ（バイト）を取得
    const fileSizeMB = fileSizeBytes / (1024 * 1024); // MBに変換
    if (fileSizeMB > 50) { // 50MBを超える場合
        throw new FileSizeError(filePath); // 独自エラーを投げる
    }
    console.log(`ファイルサイズは制限内です: ${fileSizeMB} MB`); // 制限内の場合は出力
}

checkFileSize("/Users/seki/js-training/exercises/ch11/ex12/1mfile.txt");
checkFileSize("/Users/seki/js-training/exercises/ch11/ex12/100mfile.txt");


// ファイルサイズは制限内です: 1 MB
// file:///Users/seki/js-training/exercises/ch11/ex12/index.ts:14
//         throw new FileSizeError(filePath);
//               ^

// FileSizeError: ファイルサイズが最大を超えています: /Users/seki/js-training/exercises/ch11/ex12/100mfile.txt
//     at checkFileSize (file:///Users/seki/js-training/exercises/ch11/ex12/index.ts:14:15)
//     at file:///Users/seki/js-training/exercises/ch11/ex12/index.ts:19:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:122:5)

// Node.js v20.18.1