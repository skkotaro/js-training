describe("emoji", () => {
  it("💯 length", () => {
    expect("💯".length).toBe(2);
  });

  it("Returns a comparison between \uD83D\uDCAF and \u{0001F4AF}", () => {
    expect("\uD83D\uDCAF" === "\u{0001F4AF}").toBe(true);
  });
});