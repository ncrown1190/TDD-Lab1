const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that stats with consonants", () => {
    let result = translate("marry");
    expect(result).toBe("arrymay");
  });
});
