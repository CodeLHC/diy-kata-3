const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(number(12345)).toBe([5, 4, 3, 2, 1]);
  });
});
