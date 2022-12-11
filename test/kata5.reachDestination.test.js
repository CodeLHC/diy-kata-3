const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns error message if distance or speed is NaN", () => {
    const errorMessage = "please use numbers";
    expect(reachDestination()).toBe(errorMessage);
    expect(reachDestination(80)).toBe(errorMessage);
    expect(reachDestination("lolz", 55)).toBe(errorMessage);
  });
  test("returns a different message if distance or speed is valid", () => {
    expect(reachDestination(10, 10)).toBe("I should be there in 1 hours");
    expect(reachDestination(20, 10)).toBe("I should be there in 2 hours");
  });
  test("rounds time up to nearest 0.5 hours", () => {
    expect(reachDestination(10, 20)).toBe("I should be there in 0.5 hours");
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
  });
});
