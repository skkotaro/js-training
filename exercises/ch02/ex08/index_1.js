
import * as acorn from "acorn";
const code = `
let a
a
=
3
console.log(a)
`;

const ast = acorn.parse(code, { ecmaVersion: 2020 });
//json出力:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
console.log(JSON.stringify(ast, null, 2));