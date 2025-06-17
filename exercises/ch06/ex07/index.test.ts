import { assign } from "./index";

function testCase(
  target: any,
  sameTarget: any,
  sources: any[]
): { target: any; sources: any[]; expected: any; exception: Error | null } {
  try {
    return {
      target,
      sources,
      expected: Object.assign(sameTarget, ...sources),
      exception: null,
    };
  } catch (e: any) {
    return { target, sources, expected: null, exception: e };
  }
}

const sym1 = Symbol("sym1");
const sym2 = Symbol("sym2");

function getterSetterObj(name: string): any {
  const obj: any = {
    get name() {
      return this._name;
    },
    set name(v: string) {
      this._name = v;
    },
  };
  Object.defineProperty(obj, "_name", {
    value: name,
    enumerable: false,
    writable: true,
    configurable: false,
  });
  return obj;
}

const objWithSymbolProps: any = {
  [sym1]: "symbol1",
};
Object.defineProperty(objWithSymbolProps, sym2, {
  enumerable: false,
  value: "symbol2",
});

test.each([
  testCase({ foo: "foo" }, { foo: "foo" }, []),
  testCase({}, {}, [
    { foo: "foo", bar: "bar" },
    { fizz: "fizz", buzz: "buzz" },
  ]),
  testCase({ foo: "foo", hello: "world" }, { foo: "foo", hello: "world" }, [
    { foo: "fooo", bar: "bar" },
    { foo: "foooo", fizz: "fizz", buzz: "buzz" },
  ]),
  testCase(
    { parent: { child: { foo: "fooo", bar: "bar" } } },
    { parent: { child: { foo: "fooo", bar: "bar" } } },
    [{ parent: { child: { fizz: "fizz", buzz: "buzz" } } }],
  ),
  testCase({ foo: "foo", hello: "world" }, { foo: "foo", hello: "world" }, [
    123,
    true,
    ["aa", "bb", "cc"],
    null,
    undefined,
  ]),
  testCase(1, 1, [{ foo: "foo", bar: "bar" }]),
  testCase(true, true, [{ foo: "foo", bar: "bar" }]),
  testCase(
    ["aa", "bb", "cc"],
    ["aa", "bb", "cc"],
    [{ foo: "foo", bar: "bar" }],
  ),
  testCase(new Map(), new Map(), [{ foo: "foo", bar: "bar" }]),
  testCase(new Date(), new Date(), [{ foo: "foo", bar: "bar" }]),
  testCase(null, null, [{ foo: "foo", bar: "bar" }]),
  testCase(undefined, undefined, [{ foo: "foo", bar: "bar" }]),
  testCase({ foo: "foo" }, { foo: "foo" }, [objWithSymbolProps]),
  testCase(getterSetterObj("alice"), getterSetterObj("alice"), [
    getterSetterObj("bob"),
  ]),
])(
  "test case %#",
  ({ target, sources, expected, exception }) => {
    if (exception) {
      expect(() => assign(target, ...sources)).toThrow();
    } else {
      expect(assign(target, ...sources)).toEqual(expected);
    }
  },
);