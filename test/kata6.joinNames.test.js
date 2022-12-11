const { joinNames } = require("../src");
const bart = { name: "Bart" };
const lisa = { name: "Lisa" };
const maggie = { name: "Maggie" };
const homer = { name: "Homer" };
describe("joinNames", () => {
  test("return an empty string if no names given", () => {
    expect(joinNames()).toBe("");
  });
  test("returns name as a string", () => {
    expect(joinNames([bart])).toBe("Bart");
  });

  test("returns string of two names, seperated by an ampersand", () => {
    expect(joinNames([bart, lisa])).toBe("Bart & Lisa");
  });
  test("returns string of names, seperated by commas and ends with an ampersand", () => {
    expect(joinNames([bart, lisa, maggie])).toBe("Bart, Lisa & Maggie");
  });
});
