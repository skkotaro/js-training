class Example {
    constructor(object) {
      this.obj = object;
    }
    valueOf() {
      return this.obj;
    }
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
    toString() {
        return `[object ${this.constructor.name}]`;
    }
  }

  const obj = new Example({x:1, y:2});
  const a = ({x:1, y:2, z:3});
  console.log(a);
  console.log(a.toString());
  console.log(a.valueOf());
  console.log(obj.valueOf());
  console.log(obj.toString());
