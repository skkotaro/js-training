import { EscapeString } from "./index.ts";
describe("31日の月をテスト", () => {
  it("if-elseでチェックする", () => {
    const escapeString = new EscapeString();
    expect(escapeString.withIfElse("\0\b\t\n\v\f\r\"\'\\")).toBe("\\0\\b\\t\\n\\v\\f\\r\\\"\\'\\\\");
    expect(escapeString.withIfElse("")).toBe("");
    expect(escapeString.withIfElse("\0\0\0")).toBe("\\0\\0\\0");
    expect(escapeString.withIfElse("\\\\")).toBe("\\\\\\\\");
  });
  it("switchでチェックする", () => {
    const escapeString = new EscapeString();
    expect(escapeString.withSwitch("\0\b\t\n\v\f\r\"\'\\")).toBe("\\0\\b\\t\\n\\v\\f\\r\\\"\\'\\\\");
    expect(escapeString.withSwitch("")).toBe("");
    expect(escapeString.withSwitch("\0\0\0")).toBe("\\0\\0\\0");
    expect(escapeString.withSwitch("\\\\")).toBe("\\\\\\\\");
  });
});