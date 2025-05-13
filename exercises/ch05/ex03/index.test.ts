import { Month } from "./index.ts";

describe("31日の月をテスト", () => {
  it("if-elseでチェックする", () => {
    const month = new Month();
    expect(month.checkDaysIfElse("Jan")).toBe(true);
    expect(month.checkDaysIfElse("Feb")).toBe(false);
    expect(month.checkDaysIfElse("Mar")).toBe(true);
    expect(month.checkDaysIfElse("Apr")).toBe(false);
    expect(month.checkDaysIfElse("May")).toBe(true);
    expect(month.checkDaysIfElse("Jun")).toBe(false);
    expect(month.checkDaysIfElse("Jul")).toBe(true);
    expect(month.checkDaysIfElse("Aug")).toBe(true);
    expect(month.checkDaysIfElse("Sep")).toBe(false);
    expect(month.checkDaysIfElse("Oct")).toBe(true);
    expect(month.checkDaysIfElse("Nov")).toBe(false);
    expect(month.checkDaysIfElse("Dec")).toBe(true);
  });
  it("switchでチェックする", () => {
    const month = new Month();
    expect(month.checkDaysSwitch("Jan")).toBe(true);
    expect(month.checkDaysSwitch("Feb")).toBe(false);
    expect(month.checkDaysSwitch("Mar")).toBe(true);
    expect(month.checkDaysSwitch("Apr")).toBe(false);
    expect(month.checkDaysSwitch("May")).toBe(true);
    expect(month.checkDaysSwitch("Jun")).toBe(false);
    expect(month.checkDaysSwitch("Jul")).toBe(true);
    expect(month.checkDaysSwitch("Aug")).toBe(true);
    expect(month.checkDaysSwitch("Sep")).toBe(false);
    expect(month.checkDaysSwitch("Oct")).toBe(true);
    expect(month.checkDaysSwitch("Nov")).toBe(false);
    expect(month.checkDaysSwitch("Dec")).toBe(true);});
});