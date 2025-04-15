import { convertLFtoCRLF, convertCRLFtoLF } from "./index.js";

describe("convert", () => {
  it("returns convertLFtoCRLF", () => {
    expect(convertLFtoCRLF("sample text\n")).toBe("sample text\r\n");
  });

  it("returns convertCRLFtoLF", () => {
    expect(convertCRLFtoLF("sample text\r\n")).toBe("sample text\n");
  });
});