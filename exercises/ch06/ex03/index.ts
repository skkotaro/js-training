let o = {} as any;
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

console.log("o→p:" + o.isPrototypeOf(p));
console.log("o→q:" + o.isPrototypeOf(q));

const constructors = [Object, Array, Date, Map];
const names = ["Object", "Array", "Date", "Map"];

for (let i = 0; i < constructors.length; i++) {
    console.log(
        `${names[i]}:`,
    );
  for (let j = 0; j < constructors.length; j++) {
    if (i === j) continue;
    console.log(
      `${names[i]}→${names[j]}:`,
      constructors[i].prototype.isPrototypeOf(constructors[j])
    );
  }
}