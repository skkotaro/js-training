// 未定義の変数
x = 5;
console.log(delete x);

function f1(a) {
    console.log(delete a);
};
function f2(a, a) {
    console.log(a);
};
f1(5);
f2(5, 6);
// 修正方法は思いつきませんでした。
console.log(delete undefined);