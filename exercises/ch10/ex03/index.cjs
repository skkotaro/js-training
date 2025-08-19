// モジュールをrequireでインポートするためにcjsにて実行
const { HumanEx03, greetEx03 } = require('./module.cjs');

// クラスを利用
const human = new HumanEx03('John', 30);
greetEx03(human);

// ターミナルで実行する場合は以下のコマンドを使用
// node index.cjs
