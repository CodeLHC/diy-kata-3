const { humanCatDogYears } = require("../src");

describe("human cat dog years", () => {
  test("returns empty array if no years passed in", () => {
    expect(humanCatDogYears()).toHaveLength(0);
  });

  test("return human age as first element in array", () => {
    let years = humanCatDogYears(1);
    expect(years[0]).toBe(1);
    years = humanCatDogYears(2);
    expect(years[0]).toBe(2);
  });
  test("return first cat age for first human year as second element in array", () => {
    const years = humanCatDogYears(1);
    expect(years[1]).toBe(15);
  });
  test("return second cat age for second human year as second element in array", () => {
    const years = humanCatDogYears(2);
    expect(years[1]).toBe(24);
  });
  test("return 3+ cat age for 3+ human year as second element in array", () => {
    let years = humanCatDogYears(3);
    expect(years[1]).toBe(28);
    years = humanCatDogYears(4);
    expect(years[1]).toBe(32);
  });
  test("return first dog age for first human year as third element in array", () => {
    const years = humanCatDogYears(1);
    expect(years[2]).toBe(15);
  });
  test("return second dog age for second human year as third element in array", () => {
    const years = humanCatDogYears(2);
    expect(years[2]).toBe(24);
  });
  test("return 3+ dog age for 3+ human year as third element in array", () => {
    let years = humanCatDogYears(3);
    expect(years[2]).toBe(29);
    years = humanCatDogYears(4);
    expect(years[2]).toBe(34);
  });
});
